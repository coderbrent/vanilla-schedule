import './label.css';

export function label(text) {
  const label = document.createElement('label');
  label.innerText = text;
  label.classList.add('label');

  return label;
}