
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const disabledFields = document.querySelectorAll('select.map__filter, fieldset');
const address = adForm.querySelector('#address');
address.setAttribute('readonly', true);

const disabledToggle = () => {
  disabledFields.forEach((line) => {
    line.disabled = !line.disabled;
  });
};

const makeDisabled = () => {
  adForm.classList.toggle('ad-form--disabled');
  mapFilters.classList.toggle('map__filters--disabled');

  disabledToggle();
};

export {makeDisabled};
