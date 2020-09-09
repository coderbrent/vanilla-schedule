import './Container.css';
import { DayCarousel } from '../DayCarousel/DayCarousel';

export const Container = (type) => {
  const containerWrapper = document.createElement('div');
  const scheduleHeader = document.createElement('h1');
  const scheduleBody = document.createElement('div');
  const scheduleFooter = document.createElement('div');

  containerWrapper.className = 'container-wrapper';
  scheduleHeader.className = 'schedule-title';
  scheduleFooter.className = 'schedule-footer';
  scheduleBody.className = 'container-body';
  
  scheduleBody.appendChild(DayCarousel());

  scheduleHeader.innerText = 'Set Your Schedule';
  scheduleFooter.innerText = 'this is the footer';

  containerWrapper.appendChild(scheduleHeader);
  containerWrapper.appendChild(scheduleBody);
  containerWrapper.appendChild(scheduleFooter);
  return containerWrapper;
}