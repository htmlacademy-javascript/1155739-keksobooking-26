const adForm = document.querySelector('.ad-form');
const title = adForm.querySelector('#title');
const type = adForm.querySelector('#type');
const price = adForm.querySelector('#price');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const capacity = adForm.querySelector('#capacity');
const roomNumber = adForm.querySelector('#room_number');
const guestCapacity = capacity.querySelectorAll('option');

const typeOfHouse = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const getMinPrice = () => typeOfHouse[type.value];
console.log(typeof(getMinPrice()));

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
pristine.addValidator(price, (value) => (value >= getMinPrice()), priceErrorMessage());
const typeValidateHandler = () => {
  if (price.value) {
    pristine.validate(price);
  }
};

type.addEventListener('input', typeValidateHandler);
