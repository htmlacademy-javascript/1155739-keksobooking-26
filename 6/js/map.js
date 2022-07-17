
// Неактивное состояние. При открытии страница находится в неактивном состоянии:

// На месте карты отображается серый прямоугольник.

// Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;

// Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled,
// добавленного на них или на их родительские блоки fieldset. Слайдер также должен быть заблокирован;
// Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс,
// а на её интерактивные элементы атрибуты disabled.

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const disabledFields = document.querySelectorAll('select.map__filter, fieldset');
const address = adForm.querySelector('#address');

const disabledToggle = () => {
  disabledFields.forEach((line) => {
    line.disabled = !line.disabled;
  });
};

const makeDisabled = () => {
  adForm.classList.toggle('ad-form--disabled');
  mapFilters.classList.toggle('map__filters--disabled');

  disabledToggle();

  address.setAttribute('readonly', true);
  address.value = '35.68950, 139.69200';
};

export {makeDisabled};
