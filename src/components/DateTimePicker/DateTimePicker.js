import './DateTimePicker.css';
import { label } from '../Label/label';

export const DateTimePicker = () => {
  const datepicker = document.createElement('input');
  datepicker.type = 'datetime-local';
  datepicker.className = 'datetime-picker';

  return datepicker;
}

