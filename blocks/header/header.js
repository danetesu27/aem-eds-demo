import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    if (nav) {
      toggleMenu(nav, false);
    }
  }
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {boolean} forceExpanded Optional param to force nav expand behavior
 */
function toggleMenu(nav, forceExpanded = null) {
  const expanded = forceExpanded !== null ? forceExpanded : nav.getAttribute('aria-expanded') !== 'true';
  const button = nav.querySelector('.nav-hamburger button');

  document.body.style.overflowY = expanded ? 'hidden' : '';
  nav.setAttribute('aria-expanded', expanded ? 'true' : 'false');

  if (button) {
    button.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
  }

  // enable menu collapse on escape keypress
  if (expanded) {
    window.addEventListener('keydown', closeOnEscape);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
  }
}

/**
 * Decorates the header, primarily by turning the nav DOM structure into a block
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // Extract header configuration from block DOM structure
  // Published structure has sequential child divs based on model field order
  // Model fields order: logo, logoLink, ctaText, ctaLink, stockPrice, languages
  
  const headerConfig = {
    logo: null,
    logoLink: '/',
    ctaText: null,
    ctaLink: '#',
    stockPrice: null,
    languages: null,
  };

  // Read configuration from child divs by index
  const cells = Array.from(block.querySelectorAll(':scope > div'));
  
  // Field 0: Logo (image or text)
  if (cells[0]) {
    const img = cells[0].querySelector('img') || cells[0].querySelector('picture img');
    headerConfig.logo = img ? img.src : cells[0].textContent?.trim();
  }

  // Field 1: Logo Link
  if (cells[1]) {
    headerConfig.logoLink = cells[1].textContent?.trim() || '/';
  }

  // Field 2: CTA Text
  if (cells[2]) {
    headerConfig.ctaText = cells[2].textContent?.trim();
  }

  // Field 3: CTA Link
  if (cells[3]) {
    headerConfig.ctaLink = cells[3].textContent?.trim() || '#';
  }

  // Field 4: Stock Price
  if (cells[4]) {
    headerConfig.stockPrice = cells[4].textContent?.trim();
  }

  // Field 5: Languages
  if (cells[5]) {
    headerConfig.languages = cells[5].textContent?.trim();
  }

  // Debug log to verify values are being extracted
  console.log('Header Config:', headerConfig);

  // load nav as fragment
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  // decorate nav DOM
  block.textContent = '';
  const nav = document.createElement('nav');
  nav.id = 'nav';

  // Create header structure
  const headerTop = document.createElement('div');
  headerTop.className = 'nav-header-top';

  // Logo (Brand)
  const navBrand = document.createElement('div');
  navBrand.className = 'nav-brand';
  const logoLink = document.createElement('a');
  logoLink.href = headerConfig.logoLink || '/';
  logoLink.setAttribute('aria-label', 'Home');

  if (headerConfig.logo && headerConfig.logo.startsWith('http')) {
    const logoImg = document.createElement('img');
    logoImg.src = headerConfig.logo;
    logoImg.alt = 'Logo';
    logoImg.className = 'nav-logo';
    logoLink.appendChild(logoImg);
  } else {
    logoLink.textContent = headerConfig.logo || 'CaixaBank';
  }
  navBrand.appendChild(logoLink);
  headerTop.appendChild(navBrand);

  // Nav sections (menu items from fragment)
  const navSections = document.createElement('div');
  navSections.classList.add('nav-sections');

  if (fragment) {
    // Get navigation items from fragment
    while (fragment.firstElementChild) {
      navSections.appendChild(fragment.firstElementChild);
    }
  }

  // Convert nav items
  const navItems = navSections.querySelectorAll('ul > li a');
  navItems.forEach((link) => {
    // Check if current page
    if (window.location.pathname === new URL(link.href).pathname) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // Tools section (CTA, Languages, Stock Price)
  const navTools = document.createElement('div');
  navTools.className = 'nav-tools';

  // Languages
  if (headerConfig.languages) {
    const langDiv = document.createElement('div');
    langDiv.className = 'nav-languages';
    const langs = headerConfig.languages.split(',').map(l => l.trim());
    langs.forEach((lang, idx) => {
      if (idx > 0) {
        langDiv.appendChild(document.createTextNode(' | '));
      }
      const langLink = document.createElement('a');
      langLink.href = `#${lang.toLowerCase()}`;
      langLink.textContent = lang;
      langLink.className = 'nav-language';
      langDiv.appendChild(langLink);
    });
    navTools.appendChild(langDiv);
  }

  // Stock Price
  if (headerConfig.stockPrice) {
    const stockDiv = document.createElement('div');
    stockDiv.className = 'nav-stock';
    stockDiv.textContent = headerConfig.stockPrice;
    navTools.appendChild(stockDiv);
  }

  // CTA Button
  if (headerConfig.ctaText) {
    const ctaDiv = document.createElement('div');
    ctaDiv.className = 'nav-cta';
    const ctaLink = document.createElement('a');
    ctaLink.href = headerConfig.ctaLink || '#';
    ctaLink.className = 'button primary';
    ctaLink.textContent = headerConfig.ctaText;
    ctaDiv.appendChild(ctaLink);
    navTools.appendChild(ctaDiv);
  }

  // Hamburger for mobile
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`;
  hamburger.addEventListener('click', () => toggleMenu(nav));

  // Assemble header
  nav.appendChild(headerTop);
  nav.appendChild(hamburger);
  nav.appendChild(navSections);
  nav.appendChild(navTools);
  nav.setAttribute('aria-expanded', 'false');

  // prevent mobile nav behavior on window resize
  isDesktop.addEventListener('change', () => {
    if (isDesktop.matches) {
      nav.setAttribute('aria-expanded', 'false');
      document.body.style.overflowY = '';
    }
  });

  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);
  block.append(navWrapper);
}

