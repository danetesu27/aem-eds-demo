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
  // Extract configuration - works in BOTH Universal Editor AND published site
  // Model fields order: logo, logoLink, ctaText, ctaLink, stockPrice, languages
  
  const headerConfig = {
    logo: null,
    logoLink: '/',
    ctaText: null,
    ctaLink: '#',
    stockPrice: null,
    languages: null,
  };

  const cells = Array.from(block.querySelectorAll(':scope > div'));
  
  // Helper to extract value - handles both environments:
  // - Universal Editor: <input>, <select>, nested wrappers
  // - Published site: simple text in divs
  const getFieldValue = (cell, fieldType = 'text') => {
    if (!cell) return '';
    
    // For image/reference fields
    if (fieldType === 'image') {
      const img = cell.querySelector('img') || cell.querySelector('picture img');
      if (img) return img.src;
    }
    
    // For text fields - check all possible locations
    // 1. Input element (Universal Editor)
    const input = cell.querySelector('input[type="text"]');
    if (input && input.value) return input.value.trim();
    
    // 2. Select element (Universal Editor dropdowns)
    const select = cell.querySelector('select');
    if (select && select.value) return select.value.trim();
    
    // 3. Plain text (published site - goes deep through nested divs)
    return cell.textContent?.trim() || '';
  };

  // Extract all fields by index
  if (cells[0]) {
    headerConfig.logo = getFieldValue(cells[0], 'image') || getFieldValue(cells[0]);
  }

  if (cells[1]) {
    headerConfig.logoLink = getFieldValue(cells[1]) || '/';
  }

  if (cells[2]) {
    headerConfig.ctaText = getFieldValue(cells[2]);
  }

  if (cells[3]) {
    headerConfig.ctaLink = getFieldValue(cells[3]) || '#';
  }

  if (cells[4]) {
    headerConfig.stockPrice = getFieldValue(cells[4]);
  }

  if (cells[5]) {
    headerConfig.languages = getFieldValue(cells[5]);
  }

  // Debug: log configuration
  console.log('Header cells count:', cells.length);
  console.log('Header Config extracted:', headerConfig);

  // Clear block and create new header structure
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

  // Nav sections - can be populated from metadata or left empty
  // If you need navigation items, add them to a /nav fragment
  const navSections = document.createElement('div');
  navSections.classList.add('nav-sections');
  
  // Try to load nav fragment if it exists (optional)
  const navMeta = getMetadata('nav');
  if (navMeta) {
    try {
      const navPath = new URL(navMeta, window.location).pathname;
      const fragment = await loadFragment(navPath);
      if (fragment) {
        while (fragment.firstElementChild) {
          navSections.appendChild(fragment.firstElementChild);
        }
        
        // Mark current page
        const navItems = navSections.querySelectorAll('ul > li a');
        navItems.forEach((link) => {
          if (window.location.pathname === new URL(link.href).pathname) {
            link.setAttribute('aria-current', 'page');
          }
        });
      }
    } catch (error) {
      console.log('Nav fragment not found, using header without navigation items');
    }
  }

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
  
  console.log('Header rendered. Logo:', headerConfig.logo, 'CTA:', headerConfig.ctaText);
}

