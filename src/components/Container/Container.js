import './Container.css';
import { DayCarousel } from '../DayCarousel/DayCarousel';
import { button } from '../Button/button';
 
export const Container = (type) => {
  const userId = '5f51367c59a5c222d93a8d41';
  const containerWrapper = document.createElement('div');
  const scheduleHeader = document.createElement('h1');
  const scheduleBody = document.createElement('div');
  const scheduleFooter = document.createElement('div');

  containerWrapper.className = 'container-wrapper';
  scheduleHeader.className = 'schedule-title';
  scheduleFooter.className = 'schedule-footer';
  scheduleBody.className = 'container-body';
  
  scheduleBody.appendChild(DayCarousel());
  scheduleHeader.innerText = 'Set Your Schedule';
  scheduleFooter.innerText = 'Logged in as: ';

  scheduleBody.appendChild(
    button({ 
      text: 'Submit Schedule',
      styles: 'success',
      fullWidth: true,
      action: e => {
        e.preventDefault();
        fetch(`http://localhost:3000/employees/update-schedule/${userId}`, {
          method: 'put',
          body: JSON.stringify({
            "schedule": {
                "Thursday September 5th 2020": { 
                    "start": "Saturday September 5th 2020 0500",
                    "end": "Saturday September 5th 2020 1900"
                }
            }
        })
        })
          .then(response => response.json())
          .then(data => console.log(data));
      }
    })
  );

  containerWrapper.appendChild(scheduleHeader);
  containerWrapper.appendChild(scheduleBody);
  containerWrapper.appendChild(scheduleFooter);
  
  return containerWrapper;
}