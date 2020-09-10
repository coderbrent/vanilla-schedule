import '../style.css';
import { Container } from '../components/Container/Container';

export const Home = () => {
  const home = document.createElement('div');
  home.className = 'home';
  home.appendChild(Container('home-view'));
  
  const getEmployeeById = async employeeId => {
    const url = `http://localhost:5000/employees/get-employee/${employeeId}`;
    let fetchedEmployee = await fetch(url)
      .then(response => response.json())
      .then(employeeData => employeeData);

    return fetchedEmployee;
  };

  return home;
}