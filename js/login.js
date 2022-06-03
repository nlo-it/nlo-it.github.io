const loginLink = document.querySelector('.user-login-link');
const loginForm = document.querySelector('.login-form');
const loginModal = document.querySelector('.modal-login');
const loginField = document.querySelector('.modal-login-input');
const passField = document.querySelector('.modal-input-password');
const closeModal = document.querySelector('.modal-login .close-btn');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
};

loginLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  loginModal.classList.remove('visually-hidden');
  loginModal.classList.add('modal-show');

  if (storage) {
    loginField.value = storage;
    passField.focus();
  } else {
    loginField.focus();
  };

  loginField.focus();
});

closeModal.addEventListener('click', function () {
  loginModal.classList.add('visually-hidden');
  loginModal.classList.remove('modal-show');
  loginModal.classList.remove('modal-error');
});

loginForm.addEventListener('submit', function (evt) {
  if (!loginField.value || !passField.value) {
    evt.preventDefault();
    loginModal.classList.remove("modal-error");
    loginModal.offsetWidth = loginModal.offsetWidth;
    loginModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', loginField.value);
    };
  };
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!loginModal.classList.contains('visually-hidden')) {
      loginModal.classList.add('visually-hidden');
      loginModal.classList.remove('modal-show');
      loginModal.classList.remove('modal-error');
    };
  };
});
