const form = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  const email =
    event.currentTarget.elements.email.value.trim() !== ''
      ? event.currentTarget.elements.email.value
      : alert('Всі поля повинні бути заповнені!');

  const password =
    event.currentTarget.elements.password.value.trim() !== ''
      ? event.currentTarget.elements.password.value
      : alert('Всі поля повинні бути заповнені!');

  const formData = {
    email,
    password,
  };

  form.reset();

  console.log(formData);
};

form.addEventListener('submit', onFormSubmit);
