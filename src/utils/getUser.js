import '../components/Form/form.css';

export const getUser = async (event) => {
    let userData = [];
    event.preventDefault();
    await fetch('http://localhost:5000/users')
      .then(data => data.json())
      .then(resp => {
        userData.push(resp)
      })

    userData.map(el => {
      el.forEach(el => {
        const newEl = document.createElement('div');
        const elName = document.createElement('p');
        const elPhone = document.createElement('p');

        newEl.classList.add('card');
        elName.classList.add('name');
        elName.innerText = el.name;
        elPhone.innerText = el.phone;

        newEl.appendChild(elName);
        newEl.appendChild(elPhone);

        parent.body.appendChild(newEl);
      })
    })
  }