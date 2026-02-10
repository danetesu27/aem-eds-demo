import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';
import { isAuthorEnvironment } from '../../scripts/scripts.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  const isAuthor = isAuthorEnvironment();
  let footerPath = `/footer`;

  if(isAuthor){
    // Para AEM Author, usar la ruta correcta
    footerPath = footerMeta
    ? new URL(footerMeta, window.location).pathname
    : `/content/aem-eds-demo/en/footer`;
  }

  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';

  if (!fragment) {
    console.warn('Footer: fragment not loaded. Footer content may not be authored yet.');
    block.innerHTML = '<p>Footer content not available</p>';
    return;
  }

  const footer = document.createElement('div');
  while (fragment && fragment.firstElementChild) {
    footer.append(fragment.firstElementChild);
  }

  block.append(footer);
}
