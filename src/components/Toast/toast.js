import '../Toast/toast.css';

export function toast(msg) {
  let toast = document.createElement('div');
  toast.classList.add = 'success';
  toast.innerText = msg;
  
  return toast;
}