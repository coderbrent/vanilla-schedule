import './TimePicker.css';
import { label } from '../Label/label';

export const TimePicker = (shiftType, dayData) => {
  const timePicker = document.createElement('input');
  
  timePicker.type = 'time';
  timePicker.className = 'time-picker';

  timePicker.onchange = e => {
    dayData.splice(4, 1, e.currentTarget.value);
    let someDay = new Date(dayData.join(' '));
  }

  return timePicker;
}

