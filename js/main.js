const APARTMENT_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel',];
const TIME = ['12:00', '13:00', '14:00',];
const APARTMENT_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',];
const APARTMENT_PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
 'ttps://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',];
const DIGIT = 5;
const CHARACTERISTIC_COUNT = 10;

const price = {
  MIN: 500,
  MAX: 7000,
};

const rooms = {
  MIN: 1,
  MAX: 10,
};

const lat = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const lng = {
  MIN: 139.70000,
  MAX: 139.80000,
};

const text = {
  title: 'Лучший вариант для Вас:',
  description: 'Самая уютная квартирка в городе уже ждет!',
}


//Calculate random numbers
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
}
  return ( Math.round(Math.random() * (max - min) + min) );
}

getRandomInt();

const getRandomFloat = (min, max, digits = 1) => {
  if (min < 0 || max < 0) {

    return -1;
}
  return ( (Math.random() * (max - min) + min).toFixed(digits));
}

getRandomFloat();

const getImageAddress = (number) => {
  const imageAddress = number.splice(getRandomInt(number), 1);
  return (imageAddress > 9) ? imageAddress :  `0${imageAddress}`;
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const createOffers = () => {
return ({
  author: {
    avatar: написать, },
    offer: {
      title: text.title,
      address: [location.lat, location.lng],
      price: getRandomInt(price.MIN, price.MAX),
      type: APARTMENT_TYPES[getRandomInt.splice(0, (APARTMENT_TYPES.length - 1))],
      rooms: getRandomInt(rooms.MIN, rooms.MAX),
      guests: rooms - 1,
      checkin: TIME[getRandomInt.splice(0, (TIME.length - 1))],
      checkout: TIME[getRandomInt.splice(0, (TIME.length - 1))],
      features: shuffleArray(APARTMENT_FEATURES).splice(0, APARTMENT_FEATURES.length),
      description: text.description,
      photos: shuffleArray(APARTMENT_PHOTOS).splice(0, APARTMENT_PHOTOS.length)
    },
    location: {
      lat: getRandomFloat(lat.MIN, lat.MAX, DIGIT),
      lng: getRandomFloat(lng.MIN, lng.MAX, DIGIT),
  },
 });
}

const array = [];

for (let i = 0; i < CHARACTERISTIC_COUNT; i++) {
  array.push();
};
 export {array};
