// Форма логининга - кнопка "Войти" в шапке на главной
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

// Реакция на нажатие кнопки "Купить" - всплывающей по хаверу на карточках товара
const openAddItem = document.querySelectorAll(".buy-btn");
const addItemModal = document.querySelector(".modal-add-item");
const closeAddItem = addItemModal.querySelector(".modal-add-item .close-btn");
const shoppingContinue = addItemModal.querySelector(".add-item-btn");

for (let i = 0; i < openAddItem.length; i++) {
  openAddItem[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    addItemModal.classList.remove("visually-hidden");
    addItemModal.classList.add("modal-add-item");
  })
}

shoppingContinue.addEventListener("click", function () {
  addItemModal.classList.add("visually-hidden");
});

closeAddItem.addEventListener("click", function () {
  addItemModal.classList.add("visually-hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    addItemModal.classList.add("visually-hidden");
  }
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

// Форма "Заблудились?" в подвале на главной
const openWriteUs = document.querySelector('.company-address');
const writeUsForm = document.querySelector('.modal-write-us > form');
const writeUsModal = document.querySelector('.modal-write-us');
const writeUsName = document.querySelector('.user-name');
const writeUsEmail = document.querySelector('.user-email');
const closeWriteUs = document.querySelector('.modal-write-us .close-btn');

try {
  storage = localStorage.getItem('userName');
} catch (err) {
  isStorageSupport = false;
};

openWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsModal.classList.remove('visually-hidden');
  writeUsModal.classList.add('modal-show');

  if (storage) {
    writeUsName.value = storage;
    writeUsEmail.focus();
  } else {
    writeUsName.focus();
  };

  writeUsName.focus();
});

closeWriteUs.addEventListener('click', function () {
  writeUsModal.classList.add('visually-hidden');
  writeUsModal.classList.remove('modal-show');
  writeUsModal.classList.remove('modal-error');
});

writeUsForm.addEventListener('submit', function (evt) {
  if (!writeUsName.value || !writeUsEmail.value) {
    evt.preventDefault();
    writeUsModal.classList.remove("modal-error");
    writeUsModal.offsetWidth = writeUsModal.offsetWidth;
    writeUsModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem('userName', writeUsName.value);
    };
  };
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!writeUsModal.classList.contains('visually-hidden')) {
      writeUsModal.classList.add('visually-hidden');
      writeUsModal.classList.remove('modal-show');
      writeUsModal.classList.remove('modal-error');
    };
  };
});

// Открытие интерактивной карты сайта
const openMap = document.querySelector('.map');
const mapModal = document.querySelector('.modal-map');
const closeMap = document.querySelector('.modal-map .close-btn');

openMap.addEventListener('click', function () {
  mapModal.classList.remove('visually-hidden');
});

closeMap.addEventListener('click', function () {
  mapModal.classList.add('visually-hidden');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!mapModal.classList.contains('visually-hidden')) {
      mapModal.classList.add('visually-hidden');
    };
  };
});
