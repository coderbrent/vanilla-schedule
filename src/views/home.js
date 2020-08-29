import { header } from '../components/Header/header';
import { button } from '../components/Button/button';
import { userForm } from '../components/Form/userForm';
import { scheduler } from '../components/Scheduler/Scheduler';
import '../style.css';

export const home = () => {
  const home = document.createElement('div');
  const section = document.createElement('section');
  const about = document.createElement('section');
  const para = document.createElement('p');
  const paraTu = document.createElement('p');
  const subSection = document.createElement('section');
  const subSectionTitle = document.createElement('h1');

  subSectionTitle.className = 'subtitle';
  home.className = 'home';
  section.className = 'section';
  about.className = 'section';
  subSection.className = 'body';
  const userImg = document.createElement('img');
  const userResults = document.createElement('div');
  let imageData = fetch('http://localhost:5000/users').then(res => res.json()).then(data => data[0].avatar.data);

  userResults.appendChild(userForm())

  const textSection = document.createElement('textarea');
  textSection.className = 'textbox';
  
  subSection.innerText = "/* background-image: linear-gradient(0deg, #08AEEA 0%, rgb(184, 42, 245) 100%);   */"
  para.innerText = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32";
  paraTu.innerText = "Ya'll cant deny it, im a straight riot, yalls dont wanna fuck wit me!";
  subSectionTitle.innerText = "Some Title";

  home.appendChild(header({ 
    title: 'This is the homepage!',
    subtitle: '',
    button: button({ 
      text: 'Lets go!',
      style: 'success',
      type: null,
      fullWidth: false,
      disabled: false,
      action: null,
     })
    })
  );
  
  section.appendChild(subSectionTitle);
  // subSectionTitle.appendChild(userResults);
  // section.appendChild(para);
  
  // home.appendChild(section);
  
  // about.appendChild(subSection);
  // home.appendChild(about);
  home.appendChild(scheduler())

  return home;
}