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
