import '../TextField/textField.css';
import { formatChecker } from '../../utils/formatChecker';
import { label } from '../Label/label';
import { icon } from '../Icon/icon';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
// import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";

export function textField({ type, placeholder, styles, req }) {
  const container = document.createElement('div'); // containing div
  const textBox = document.createElement('input'); // input field itself
  const errorMsgText = document.createElement('span'); // warning/error message text
  const successIcon = icon(faCheckCircle, 'ico-success');

  container.className = 'field-container';
  container.appendChild(label(type));
  container.appendChild(textBox);
  errorMsgText.classList.add('error-text');
  
  styles ? textBox.classList.add(...styles) : null;
  textBox.setAttribute('type', type);
  textBox.name = type;
  textBox.id = type;
  textBox.required = req;
  textBox.placeholder = placeholder;

  textBox.onchange = e => {
    const field = formatChecker(type, String(e.currentTarget.value).trim());
  
    textBox.classList.toggle('error', !field);
    textBox.classList.toggle('correct', field);

    if(field.canSubmit) {
      // container.append(successIcon)
      // container.children[1].appendChild(successIcon)
    }

    if(textBox.classList.contains('error')) {
      if(field.isEmpty) {
        errorMsgText.innerText = 'Required field. Must contain an input.';
        container.appendChild(errorMsgText);
      }
      
      else if(!field.isValid) {
        errorMsgText.innerText = 'Invalid input.';
        container.appendChild(errorMsgText);
      }
    };

  };

  return container;
}