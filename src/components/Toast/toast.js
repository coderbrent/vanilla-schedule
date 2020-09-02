/**
 * @desc a simple toast component that will display unobtrusive update messages.
 * for ex. "User successfully added". Information that does not require the user to
 * make any decisions.
 * 
 * Design considerations - 
 * - A toast should be unobtrusive. It's only to display quick
 * info 'bits'.
 * 
 * - It should stay on screen for 3 - 5 seconds then disappear.
 * 
 * @param {String} msg the text content for the message.
 * @param {String} type the type of toast (CSS class) - ex. info, success, warning.
 * @param {Boolean} visible takes true or false to determine component visibility.
 */

import '../Toast/toast.css';

export function Toast(msg, type, visible) {
  let toast = document.createElement('div');
  toast.className = 'toast';
  toast.classList.add(type)
  toast.innerText = msg;
  visible ? toast.style.left = '0px' : null;
  
  return toast;
}