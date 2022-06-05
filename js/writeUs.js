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
