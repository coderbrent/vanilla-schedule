import './header.css'
import {button} from '../Button/button';

export const header = ({ title, subtitle }) => {
  const header = document.createElement('div');
  const headerTitle = document.createElement('h1');
  const headerSubtitle = document.createElement('h3');
  const contentWrapper = document.createElement('div');
  const headerShape = document.createElement('div');

  headerTitle.className = 'header-title';
  headerSubtitle.className = 'header-subtitle';
  header.className = 'header';
  contentWrapper.className = 'wrapper';
  headerShape.className = 'header-shape';
  
  headerTitle.innerText = title;
  headerSubtitle.innerText = subtitle;
  
  header.appendChild(headerShape);
  header.appendChild(headerTitle);
  header.appendChild(headerSubtitle);

  header.appendChild(button({ text: 'lets go', styles: 'success' }));

  contentWrapper.appendChild(header);
  document.body.onload = () => headerShape.classList.add('blur');
  document.body.onload = () => button.classList.add('pulse');

  return contentWrapper;
}