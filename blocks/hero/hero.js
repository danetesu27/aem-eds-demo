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
  // === CAROUSEL FUNCTIONALITY ===

  // Wrap each top-level div as a slide
  const slides = Array.from(block.children);

  if (slides.length > 0) {
    slides.forEach((slide, index) => {
      // Extract slide data
      const picture = slide.querySelector('picture');
      const link = slide.querySelector('a');
      const linkUrl = link?.href || '#';
      const textContent = slide.querySelector('h1, h2, h3, h4, h5, h6, p:not(.button-container)');

      // Extract layout options from data attributes or divs
      const cells = slide.querySelectorAll(':scope > div');
      let textPosition = 'center';
      let textAlign = 'center';

      // Check if we have config cells (image, alt, text, link, textPosition, textAlign)
      if (cells.length >= 5) {
        textPosition = cells[4]?.textContent?.trim().toLowerCase() || 'center';
      }
      if (cells.length >= 6) {
        textAlign = cells[5]?.textContent?.trim().toLowerCase() || 'center';
      }

      // Clear slide
      slide.innerHTML = '';
      slide.classList.add('hero-slide');
      slide.setAttribute('role', 'tabpanel');
      slide.setAttribute('aria-label', `Slide ${index + 1}`);
      slide.setAttribute('aria-hidden', index !== 0 ? 'true' : 'false');

      // Create clickable wrapper
      const slideLink = document.createElement('a');
      slideLink.href = linkUrl;
      slideLink.className = 'hero-slide-link';

      // Add layout classes
      slideLink.classList.add(`text-position-${textPosition}`);
      slideLink.classList.add(`text-align-${textAlign}`);
      slideLink.setAttribute('aria-label', textContent?.textContent || `Slide ${index + 1}`);

      // Add background image
      if (picture) {
        const bgPicture = picture.cloneNode(true);
        bgPicture.classList.add('hero-background');
        slideLink.appendChild(bgPicture);
      }

      // Add text content
      if (textContent) {
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'hero-content';
        contentWrapper.appendChild(textContent.cloneNode(true));
        slideLink.appendChild(contentWrapper);
      }

      slide.appendChild(slideLink);

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
}

