import { userForm } from '../components/Form/userForm';
import { toast } from '../components/Toast/toast';
import '../style.css';
import { modal } from '../components/Modal/modal';
import { Container } from '../components/Container/Container';

export const Home = () => {
  const home = document.createElement('div');
  home.className = 'home';
  home.appendChild(Container('home-view'));
  // home.appendChild(modal('test modal', 'success', 'md', 'visible', userForm()));

  const getEmployeeById = async employeeId => {
    const url = `http://localhost:5000/employees/get-employee/${employeeId}`;
    let fetchedEmployee = await fetch(url)
      .then(response => response.json())
      .then(employeeData => employeeData);

    return fetchedEmployee;
  };

  return home;
}