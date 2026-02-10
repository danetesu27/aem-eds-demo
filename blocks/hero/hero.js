/**
 * Creates carousel navigation dots
 * @param {number} numSlides - Number of slides in the carousel
 * @returns {HTMLElement} - Dots container
 */
function createDots(numSlides) {
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'hero-dots';
  dotsContainer.setAttribute('role', 'tablist');

  for (let i = 0; i < numSlides; i += 1) {
    const dot = document.createElement('button');
    dot.className = 'hero-dot';
    dot.setAttribute('type', 'button');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  }

  return dotsContainer;
}

/**
 * Shows a specific slide in the carousel
 * @param {Element} block - Hero block element
 * @param {number} index - Index of slide to show
 */
function showSlide(block, index) {
  const slides = block.querySelectorAll('.hero-slide');
  const dots = block.querySelectorAll('.hero-dot');

  if (!slides.length) return;

  // Update current slide index
  block.dataset.currentSlide = index;

  // Hide all slides
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.setAttribute('aria-hidden', i !== index);
  });

  // Show current slide
  slides[index].classList.add('active');

  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
    dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
  });
}

/**
 * Auto-advance carousel
 * @param {Element} block - Hero block element
 * @param {number} interval - Time in ms between slides (default 5000)
 */
function startAutoPlay(block, interval = 5000) {
  const slides = block.querySelectorAll('.hero-slide');
  if (slides.length <= 1) return null;

  const autoPlayInterval = setInterval(() => {
    const currentIndex = Number.parseInt(block.dataset.currentSlide || '0', 10);
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(block, nextIndex);
  }, interval);

  return autoPlayInterval;
}

/**
 * Decorates hero block as carousel
 * @param {Element} block
 */
export default function decorate(block) {
  // Get configuration options
  const enableUnderline = block.querySelector(':scope div:nth-child(3) > div')?.textContent?.trim() || 'false';
  const layoutStyle = block.querySelector(':scope div:nth-child(4) > div')?.textContent?.trim() || 'overlay';
  const ctaStyle = block.querySelector(':scope div:nth-child(5) > div')?.textContent?.trim() || 'default';
  const backgroundStyle = block.querySelector(':scope div:nth-child(6) > div')?.textContent?.trim() || 'default';

  // Apply classes
  if (layoutStyle) {
    block.classList.add(`${layoutStyle}`);
  }

  if (backgroundStyle) {
    block.classList.add(`${backgroundStyle}`);
  }

  // Add removeunderline class if underline is disabled
  if (enableUnderline.toLowerCase() === 'false') {
    block.classList.add('removeunderline');
  }
  
  // Find the button container within the hero block
  const buttonContainer = block.querySelector('p.button-container');
  
  if (buttonContainer) {
    buttonContainer.classList.add(`cta-${ctaStyle}`);
  }
  
  // === CAROUSEL FUNCTIONALITY ===

  // Wrap each top-level div as a slide
  const slides = Array.from(block.children);

  if (slides.length > 0) {
    slides.forEach((slide, index) => {
      slide.classList.add('hero-slide');
      slide.setAttribute('role', 'tabpanel');
      slide.setAttribute('aria-label', `Slide ${index + 1}`);
      slide.setAttribute('aria-hidden', index !== 0 ? 'true' : 'false');

      if (index === 0) {
        slide.classList.add('active');
      }
    });

    // Add carousel navigation dots if multiple slides
    if (slides.length > 1) {
      const dotsContainer = createDots(slides.length);
      block.appendChild(dotsContainer);

      // Initialize current slide
      block.dataset.currentSlide = '0';

      // Add click handlers to dots
      const dots = dotsContainer.querySelectorAll('.hero-dot');
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          showSlide(block, index);
          // Reset auto-play timer
          if (block.autoPlayInterval) {
            clearInterval(block.autoPlayInterval);
            block.autoPlayInterval = startAutoPlay(block);
          }
        });
      });

      // Start auto-play
      block.autoPlayInterval = startAutoPlay(block, 5000);

      // Pause on hover
      block.addEventListener('mouseenter', () => {
        if (block.autoPlayInterval) {
          clearInterval(block.autoPlayInterval);
        }
      });

      block.addEventListener('mouseleave', () => {
        block.autoPlayInterval = startAutoPlay(block, 5000);
      });

      // Stop auto-play when page is hidden (tab switched)
      document.addEventListener('visibilitychange', () => {
        if (document.hidden && block.autoPlayInterval) {
          clearInterval(block.autoPlayInterval);
        } else if (!document.hidden && !block.autoPlayInterval) {
          block.autoPlayInterval = startAutoPlay(block, 5000);
        }
      });

      // Keyboard navigation (Arrow keys)
      block.addEventListener('keydown', (e) => {
        const currentIndex = Number.parseInt(block.dataset.currentSlide || '0', 10);

        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
          showSlide(block, prevIndex);
          // Reset auto-play
          if (block.autoPlayInterval) {
            clearInterval(block.autoPlayInterval);
            block.autoPlayInterval = startAutoPlay(block, 5000);
          }
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % slides.length;
          showSlide(block, nextIndex);
          // Reset auto-play
          if (block.autoPlayInterval) {
            clearInterval(block.autoPlayInterval);
            block.autoPlayInterval = startAutoPlay(block, 5000);
          }
        }
      });

      // Make block focusable for keyboard navigation
      block.setAttribute('tabindex', '0');
      block.setAttribute('aria-label', 'Carousel de imágenes. Use las flechas para navegar.');
    }
  }

  // Hide configuration divs
  [3, 4, 5, 6].forEach((index) => {
    const configDiv = block.querySelector(`:scope div:nth-child(${index})`);
    if (configDiv) {
      configDiv.style.display = 'none';
    }
  });
}

