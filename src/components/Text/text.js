import '../Text/text.css';

export function Text(type, text) {
  switch(type) {
    case 'title': { 
      const el = document.createElement('h1');
      el.classList.add('title');
      el.innerText = text;
      return el;
    };
    case 'sub-title': {
      const el = document.createElement('h3');
      el.classList.add('sub-title');
      el.innerText = text;
      return el;
    };
    case 'body': {
      const el = document.createElement('p');
      el.classList.add('body');
      el.innerText = text;
      return el;
    }
  }
}