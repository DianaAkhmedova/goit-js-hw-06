const form = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  for (const element of elements) {
    if (element.name) {
      if (element.value.trim() === '') alert('Всі поля повинні бути заповнені!');
    }
  }

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  // const email =
  //   event.currentTarget.elements.email.value.trim() !== ''
  //     ? event.currentTarget.elements.email.value
  //     : alert('Всі поля повинні бути заповнені!');

  // const password =
  //   event.currentTarget.elements.password.value.trim() !== ''
  //     ? event.currentTarget.elements.password.value
  //     : alert('Всі поля повинні бути заповнені!');

  const formData = {
    email,
    password,
  };

  form.reset();

  console.log(formData);
};

form.addEventListener('submit', onFormSubmit);
