import './Scheduler.css';

export const scheduler = () => {
  const wrapper = document.createElement('div');
  const section = document.createElement('section');
  const sectionTitle = document.createElement('h1');
  const twoColGrid = document.createElement('div');
  const nameRows = document.createElement('div');
  const dayCols = document.createElement('div');
  const nameFields = document.createElement('div');

  const nameList = ['Brent', 'Lily', 'Theo', 'Colleen', 'Michelle', 'Guado']

  const dummyUsers = [
    { 
      name: 'Brent', 
      schedule: {
        shifts: [ 
          'August 10, 20 14:30',
          'August 11, 20 18:30'
        ]
      }
    }
  ]

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
   };

  const dayList = Array(getDaysInMonth(8, 2020)).fill().map((el, i) => i + 1);

  const createTextNode = (type, style, txt) => {
    let el = document.createElement(type)
    el.innerText = txt;
    el.className = style;

    return el
  }

  nameList.map(el => nameRows.appendChild(createTextNode('div', 'name-field', el)));
  dayList.map(el => dayCols.appendChild(createTextNode('div', 'day-field', el)))
  
  wrapper.className = 'wrapper';
  dayCols.className = 'day-cols';
  nameRows.className = 'name-rows';
  section.className = 'section';
  sectionTitle.innerText = "This weeks schedule";
  twoColGrid.className = 'two-col-grid';
  twoColGrid.appendChild(nameRows);

  section.appendChild(dayCols);
  section.appendChild(twoColGrid);
  wrapper.appendChild(section);
  
  return wrapper;
}