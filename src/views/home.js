import { userForm } from '../components/Form/userForm';
import { toast } from '../components/Toast/toast';
import '../style.css';
import { modal } from '../components/Modal/modal';

export const home = () => {
  const home = document.createElement('div');

  home.appendChild(toast('User was not added!', true, 'info'));
  home.appendChild(modal('test modal', 'success', 'md', 'visible', userForm()));

  const getEmployeeById = async employeeId => {
    let fetchedEmployee = await fetch(`http://localhost:5000/employees/get-employee/${employeeId}`)
      .then(response => response.json())
      .then(employeeData => employeeData);

    return fetchedEmployee;
  };

  getEmployeeById('5f51367c59a5c222d93a8d41');

  return home;
}