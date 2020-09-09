//how does this data that the user gets look? it should just be
//lazy load the next days... dont load all days at once
// get the current date - increment the current date
import './DayCarousel.css';
import { getNowTillMonthEnd } from '../../utils/time';

export const DayCarousel = () => {
  const upcomingWeek = getNowTillMonthEnd().slice(0, 7);
  const upcomingWeekBreakdown = upcomingWeek.map(el => el.split(' '));
  const scheduleView = document.createElement('div');
  scheduleView.className = 'schedule-view';

  const createTextNode = (type, style, txt) => {
    let el = document.createElement(type)
    el.innerText = txt;
    el.className = style;

    return el;
  }

  upcomingWeekBreakdown.map(el => {
    let monthName = el[1];
    let dayOfMonth = el[2];
    let year = el[3];

    const dayBlock = document.createElement('div');
    dayBlock.className = 'day-block';

    dayBlock.appendChild(createTextNode('div', 'day-block-title', el[0]))
    dayBlock.appendChild(createTextNode('div', 'day-block-date', el[2]))
    
    scheduleView.appendChild(dayBlock)
    
  })
    
  return scheduleView;
}