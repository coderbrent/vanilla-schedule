import printMe from './print';
import './style.css'
import { home } from './views/home';

document.body.appendChild(home());

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printme module')
    printMe();
  })
}