/**
 * @desc Displays small update messages in UI for a few seconds. Good to use
 * for things like success/fail msgs on CRUD operations.
 * Adjust the timing to change how long the message displays before
 * disappearing.
 */

import '../Toast/toast.css';
import { faExclamationCircle, faInfoCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { icon } from '../Icon/icon';

export function toast(msg, visible, type) {
  let toast = document.createElement('div');
  toast.className = 'toast';
  //TODO - the toast should slide in from the bottom left side of the screen
  //stick around for 4s then disappear. That doesn't work. Make it.
  toast.onload = setTimeout(() => { 
    toast.classList.add('hide');
  }, 4000);
  toast.classList.toggle('show', visible);
  toast.innerText = msg;
  
  switch(type) {
    case 'success': { 
      toast.appendChild(icon(faCheckCircle, 'toast-ico'));
      toast.classList.add('success');
    };
    break;
    case 'fail': { 
      toast.appendChild(icon(faExclamationCircle, 'toast-ico'));
      toast.classList.add('fail');
    };
    break;
    case 'info': {
      toast.appendChild(icon(faInfoCircle, 'toast-ico'));
      toast.classList.add('info');
    }
    default: null;
  }
  
  return toast;
}