import './fileUpload.css';

export const fileUpload = ({ name }) => {
  const formContainer = document.createElement('div');
  const formLabel = document.createElement('label');
  const formInput = document.createElement('input');

  formInput.name = name;
  formLabel.className = 'form-label';
  formInput.className = 'form-input';
  formContainer.className = 'form-container';

  formInput.id = 'avatar';
  formInput.name = 'avatar';
  formLabel.innerText = 'photo:';
  formInput.type = 'file';
  
  formContainer.appendChild(formLabel);
  formContainer.appendChild(formInput);

  return formContainer;
}