const button = document.getElementById('myButton');

const preventFormSubmit = (e) => {
  e.preventDefault();
};

button.addEventListener('click', preventFormSubmit);
