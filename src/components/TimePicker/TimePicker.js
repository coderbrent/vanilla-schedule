import './TimePicker.css';
import { label } from '../Label/label';

export const TimePicker = (shiftType, dayData) => {
  const timePicker = document.createElement('input');
  
  timePicker.type = 'time';
  timePicker.className = 'time-picker';
  timePicker.id = shiftType;
  
  timePicker.onchange = e => {
    dayData.splice(4, 1, e.currentTarget.value);
    let newShiftData = new Date(dayData.join(' '));
    localStorage.setItem(dayData[0] + '- ' + shiftType, newShiftData);

  }

  return timePicker;
}

