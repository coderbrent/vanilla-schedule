//how does this data that the user gets look? it should just be
//lazy load the next days... dont load all days at once
// get the current date - increment the current date
import './DayCarousel.css';
import '../Form/userForm.css';
import { getNowTillMonthEnd } from '../../utils/time';
import Employee from '../../models/Employee';
import { modal } from '../Modal/modal';
import { button } from '../Button/button';
import { label } from '../Label/label';
import { TimePicker } from '../TimePicker/TimePicker';

const addUserShiftForm = (data, formAction) => {
  data ? console.log(data) : null;
  const formWrapper = document.createElement('div');
  const formContent = document.createElement('form');
  formWrapper.className = 'form-wrapper';
  formContent.className = 'form';
  const labelForStart = document.createElement('label');
  const labelForEnd = document.createElement('label');
  labelForStart.innerText = 'Start Time: ';
  labelForEnd.innerText = 'End Time: ';

  const startTimeControl = labelForStart.appendChild(TimePicker('startOfShift', data));
  const endTimeControl = labelForEnd.appendChild(TimePicker('endOfShift', data));

  formContent.appendChild(startTimeControl);
  formContent.appendChild(endTimeControl);

  formContent.appendChild(button({
    text: 'Set Shift',
    styles: 'success',
    type: 'submit',
    fullWidth: true,
    action: e => { 
      e.preventDefault();
      formAction;
    }
  }))
  
  formWrapper.appendChild(formContent);
  
  return formWrapper;
};

/**
 * @desc The DayCarousel component displays a row layout of days in the current week.
 * The purpose is to allow the user to set their shifts for the current work week.
 * there will be a clickable arrow icon on the right that will advance the calendar
 * by an additional day (or 7 days if held down) (up to a month in advance), while
 */

export const DayCarousel = () => {
  const upcomingWeek = getNowTillMonthEnd().slice(0, 7);
  const upcomingWeekBreakdown = upcomingWeek.map(el => el.split(' '));
  const scheduleView = document.createElement('div');
  
  scheduleView.className = 'schedule-view';

  const createTextNode = (type, style, txt) => {
    let el = document.createElement(type);
    el.innerText = txt;
    el.className = style;

    return el;
  }

  upcomingWeekBreakdown.map(el => {
    let monthName = el[1];
    let dayOfMonth = el[2];
    let year = el[3];

    //dayBlock will hold all pertinent data from the date
    const dayBlock = document.createElement('div');
    dayBlock.setAttribute('data', el.toString());
    dayBlock.className = 'day-block';

    dayBlock.id = el[0];

    dayBlock.onclick = e => {
      let thisDay = e.currentTarget.data;
      let dayId = e.currentTarget.id;
      document.body.appendChild(
        modal(
          `Set Shift for ${dayId}`, //modal title
          true, //visible
          addUserShiftForm(el) //form specific to day
        )
      );
    }

    dayBlock.appendChild(createTextNode('div', 'day-block-title', el[0]))
    dayBlock.appendChild(createTextNode('div', 'day-block-date', el[2]))
    
    scheduleView.appendChild(dayBlock)
    
  })
    
  return scheduleView;
}