// register new users
const regUserBtn = document.querySelector('#regUserBtn');
regUserBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('../controllers/regUser.php')
    .then(response => response.json())
    .then(json => console.log(json))
})