const adForm = document.querySelector('.ad-form');
// const title = adForm.querySelector('#title');
const type = adForm.querySelector('#type');
const price = adForm.querySelector('#price');
const time = adForm.querySelector('#timein');
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

const priceChangeHandler = () => {
  const minPrice = typeOfHouse[type.value];
  price.min = minPrice;
  price.placeholder = minPrice;
};

type.addEventListener('change', priceChangeHandler);

const timeSetHandler = () => {timeOut.value = timeIn.value;
};

time.addEventListener('change', timeSetHandler);


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

