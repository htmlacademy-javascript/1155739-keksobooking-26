import { makeRequest } from './api.js';
import { sendDataSuccess, sendDataError } from './responses.js';
import { CENTER_COORDINATES, mapReset } from './map.js';

const adForm = document.querySelector('.ad-form');
const title = adForm.querySelector('#title');
const type = adForm.querySelector('#type');
const address = adForm.querySelector('#address');
const price = adForm.querySelector('#price');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const capacity = adForm.querySelector('#capacity');
const roomNumber = adForm.querySelector('#room_number');
const guestCapacity = capacity.querySelectorAll('option');
const resetButton = adForm.querySelector('.ad-form__reset');
const sliderElement = adForm.querySelector('.ad-form__slider');

const priceOfType = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const getMinPrice = () => priceOfType[type.value];
getMinPrice();

const priceChangeHandler = () => {
  price.min = getMinPrice();
  price.placeholder = getMinPrice();
};

type.addEventListener('change', priceChangeHandler);

const timeInSetHandler = () => {timeIn.value = timeOut.value;
};
timeOut.addEventListener('change', timeInSetHandler);

const timeOutSetHandler = () => {timeOut.value = timeIn.value;
};
timeIn.addEventListener('change', timeOutSetHandler);


const numberOfGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};


const validateRooms = () => {
  const roomValue = roomNumber.value;

  guestCapacity.forEach((guest) => {
    const isDisabled = !(numberOfGuests[roomValue].includes(guest.value));
    guest.selected =  numberOfGuests[roomValue][0] === guest.value;
    guest.disabled = isDisabled;
    guest.hidden = isDisabled;
  });
};

validateRooms();

const roomNumberChangeHandler = () => {
  validateRooms();
};

roomNumber.addEventListener('change', roomNumberChangeHandler);

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
});
title.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  isValid();

});
//цена за ночь
const priceErrorMessage = () => `Минимальная цена: ${getMinPrice()}`;
const validatePrice = () => Number(price.value) >= priceOfType[type.value];
pristine.addValidator(price, validatePrice, priceErrorMessage);
const typeValidateHandler = () => {
  if (price.value) {
    pristine.validate(price);
  }
};

type.addEventListener('input', typeValidateHandler);

//Движок цены
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 1000,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

type.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100000,
      },
    });
  } sliderElement.noUiSlider.set(getMinPrice());
});

//записываем в поле ввода
sliderElement.noUiSlider.on('update', () => {
  price.value = sliderElement.noUiSlider.get();
});

price.addEventListener('input', () => {
  sliderElement.noUiSlider.set(price.value);
});

const resetForm = () => {
  adForm.reset();
  mapReset();
  address.value = `${CENTER_COORDINATES.lat}, ${ CENTER_COORDINATES.lng}`;
};


document.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    makeRequest(sendDataSuccess, sendDataError, 'POST', new FormData(evt.target));
    resetForm();
  }
});

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();

});

