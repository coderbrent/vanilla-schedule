import './userForm.css';
import { textField } from "../TextField/textField";
import { button } from '../Button/button';
import { icon } from '../Icon/icon';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { modal } from '../Modal/modal';
import { fileUpload } from '../FileUpload/fileUpload';
import { DateTimePicker } from '../DateTimePicker/DateTimePicker';

export const userForm = () => {
  const formWrapper = document.createElement('div');
  const userForm = document.createElement('form');
  const header = document.createElement('div');
  const formData = new FormData;

  header.className = 'form-header';
  userForm.className = 'form';
  formWrapper.className = 'form-wrapper';

  userForm.setAttribute('novalidate', true);

  header.innerText = "Add User";
  header.appendChild(icon(faUserCircle, 'ico-indent'));
  
  const userName = textField({ 
    type: 'name',
    placeholder: 'Brent Abruzese',
    styles: ['input'],
    req: true
  })

  const userEmail = textField({
    type: 'email',
    placeholder: 'brent@gmail.com',
    styles: ['input'],
    req: true
  })

  const userPhone = textField({
    type: 'tel',
    placeholder: '718-816-8324',
    styles: ['input'],
    req: true
  })

  // const dateTime = DateTimePicker();

  const submitBtn = button({
    text: 'submit',
    type: 'submit',
    style: 'success',
    fullWidth: true,
    disabled: false,
    action: async event => {
      event.preventDefault();

      console.log(document.getElementById('avatar').files[0])

      formData.append('name', userName.children[1].value.trim())
      formData.append('phone', userPhone.children[1].value.trim())
      formData.append('email', userEmail.children[1].value.trim())
      formData.append('avatar', document.getElementById('avatar').files[0])

      const options = {
        method: 'post',
        body: formData,
      }

      if (options && options.headers) {
        delete options.headers['Content-Type'];
      }

      await fetch(`http://localhost:5000/add-user`,
       options
      ).then(res => res.json())
      .then(data => {
        if(data) {
          if(data.status === 200) {
            document.body.appendChild(modal(data.msg, 'success', 'sm', 'visible', null))
          } else if(data.status === 400) {
            document.body.appendChild(modal(data.msg, 'fail', 'sm', 'visible', null));
          }
        }
      })

    } 
  });

  formWrapper.appendChild(header)
  userForm.appendChild(userName);
  userForm.appendChild(userEmail);
  userForm.appendChild(userPhone);
  userForm.appendChild(fileUpload({ name: 'avatar'}));
  userForm.appendChild(submitBtn);

  formWrapper.appendChild(userForm);

  return formWrapper;
}