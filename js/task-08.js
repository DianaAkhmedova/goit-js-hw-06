const form = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  for (const element of elements) {
    if (element.name && element.value.trim() === '') {
      return alert('Всі поля повинні бути заповнені!');
    }
  }

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const formData = {
    email,
    password,
  };

  form.reset();

  console.log(formData);
};

form.addEventListener('submit', onFormSubmit);
