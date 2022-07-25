import {getRandomInt, getRandomFloat, getImageAddress, shuffleArray} from './util.js';

const APARTMENT_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel',];
const TIME = ['12:00', '13:00', '14:00',];
const APARTMENT_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',];
const APARTMENT_PHOTOS = [ 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
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
};

const offersArray = [];

for (let i = 0; i < CHARACTERISTIC_COUNT; i++) {
  const getCoorditanes = {
    lat: getRandomFloat(lat.MIN, lat.MAX, DIGIT),
    lng: getRandomFloat(lng.MIN, lng.MAX, DIGIT),
  };
  offersArray.push({
    author: {
      avatar: `${getImageAddress(getRandomInt(1, 11))}` },
    offer: {
      title: text.title,
      address: `${getCoorditanes.lat}, ${getCoorditanes.lng}`,
      price: getRandomInt(price.MIN, price.MAX),
      type: APARTMENT_TYPES[getRandomInt(0, APARTMENT_TYPES.length)],
      rooms: getRandomInt(rooms.MIN, rooms.MAX),
      guests: getRandomInt(rooms.MIN, rooms.MAX),
      checkin: TIME[getRandomInt(0, TIME.length - 1)],
      checkout: TIME[getRandomInt(0, TIME.length - 1)],
      features: shuffleArray(APARTMENT_FEATURES).slice(0,getRandomInt(1,APARTMENT_FEATURES.length)),
      description: text.description,
      photos: shuffleArray(APARTMENT_PHOTOS).slice(0,getRandomInt(1,APARTMENT_PHOTOS.length)),
    },
    location: {
      lat: getCoorditanes.lat,
      lng: getCoorditanes.lng,
    },
  });
}

export {offersArray};

