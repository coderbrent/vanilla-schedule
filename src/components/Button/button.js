import './button.css';

export function button({ text, styles, type, disabled, fullWidth, action }) {
  const btn = document.createElement('button');
  btn.className = 'btn'
  btn.innerText = text;
  btn.type = type;
  fullWidth ? btn.style.width = '100%' : null;
  btn.onclick = action;
  btn.classList.add(styles);
  btn.disabled = disabled;

  return btn;
}

