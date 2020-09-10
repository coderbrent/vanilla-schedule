import './modal.css'

export function modal(msg, visible, form) {
  const modalWrapper = document.createElement('div');
  const modalContent = document.createElement('div');
  const modal = document.createElement('div');
  const modalHeader = document.createElement('div');
  const closeBtn = document.createElement('button');

  visible ? modal.style.visibility = 'visible' : 'hidden';

  modalHeader.innerText = msg;
  modal.className = 'modal';
  modalWrapper.className = 'modal-wrapper';
  modalHeader.className = 'modal-header';
  
  closeBtn.className = 'close';
  closeBtn.innerText = 'x';
  
  closeBtn.onclick = e => {
    e.preventDefault();
    modal.style.visibility = 'hidden';
  };

  modalWrapper.appendChild(modalHeader);
  modalHeader.appendChild(closeBtn);
  
  form ? 
  modalWrapper.appendChild(form) :
  modalWrapper.appendChild(modalContent);
  
  modal.appendChild(modalWrapper);

  return modal;
}