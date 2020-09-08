import './modal.css'
import { button } from '../Button/button';

export function modal(data, style, size, visible, form) {
  const modalWrapper = document.createElement('div')
  const modalContent = document.createElement('div');
  const modal = document.createElement('div');
  const modalHeader = document.createElement('div');
  const closeBtn = document.createElement('button');
  const content = document.createElement('p');

  content.innerText = data;

  modal.classList.add('modal');
  // modalHeader.classList.add('modal-header');
  // modalContent.classList.add('modal-content');
  modalWrapper.className = 'modal-wrapper';
  
  modalHeader.innerText = style === 'success' ? 'Yay!' : 'Uh oh.' 

  size ? modalContent.classList.add(size) : null;
  style ? modalContent.classList.add(style) : null;
  form ? modalWrapper.appendChild(form) : null;

  modal.style.visibility = visible;

  closeBtn.classList.add('close');
  closeBtn.innerText = 'x';
  closeBtn.onclick = e => {
    e.preventDefault();
    modal.style.visibility = 'hidden';
  };

  // modalContent.appendChild(content);
  // modalContent.appendChild(button({ 
  //   text: 'OK',
  //   style: 'success',
  //   fullWidth: true,
  //   disabled: false,
  //   action: () => modal.style.visibility = 'hidden'
  // }))
  // modalHeader.appendChild(closeBtn);
  // modalWrapper.appendChild(modalHeader);
  // modalWrapper.appendChild(modalContent);
  
  modal.appendChild(modalWrapper);

  return modal;
}