/* eslint-disable semi */
import { offersArrays } from './data.js';
import { APARTMENT_FEATURES } from './data.js';
//Мапа для типов
const apartmentType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};
//Склонения
const numDeclineRooms = (num) => {
  if (num === 1 || num % 10 === 1) {
    return 'комната';
  }
  else if (num % 10 >= 2 && num % 10 <= 4) {
    return 'комнаты';
  } return 'комнат';
};

const numDeclineGuests = (num) => (num === 1 || num % 10 === 1) ? 'гость' : 'гостей';

//Находим шаблон
const mapCanvas = document.querySelector('#map-canvas');
const elementTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarPopups = offersArrays();

//Заполненяем по шаблону
similarPopups.forEach((offer, author) => {
  const newTemplate = elementTemplate.cloneNode(true);

  newTemplate.querySelector('.popup__title').textContent = offer.title;
  newTemplate.querySelector('.popup__text--address').textContent = offer.address;
  newTemplate.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  newTemplate.querySelector('.popup__type').textContent = apartmentType[offer.type];
  newTemplate.querySelector('.popup__text--capacity').textContent = `${offer.rooms}${  numDeclineRooms(offer.rooms)  }для ${offer.guests}${  numDeclineGuests(offer.guests)}`;
  newTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  const featureList = newTemplate.querySelectorAll('.popup__feature');

  //Проверяем наличие фич
  featureList.forEach((FeatureListItem) => {
    const isIncluded = APARTMENT_FEATURES.some(
      (userFeature) => FeatureListItem.classList.contains(`popup__feature--${  userFeature}`)
    );
    if (!isIncluded) {
      FeatureListItem.remove();
    }
  });
  //Скрываем описание если его нет
  if (offer.description.length === 0) {
    newTemplate.querySelector('.popup__description').remove();
  } else {
    newTemplate.querySelector('.popup__description').textContent = offer.description
  }

  //Выводим фотографии
  const photosList = newTemplate.querySelector('.popup__photos');
  const newPhotoTemplate = photosList.querySelector('.popup__photo');

  if (offer.photos.length === 0) {
    photosList.remove();
  } else {
    offer.photos.forEach((item) => {
      const newPhoto = newPhotoTemplate.cloneNode(true);
      newPhoto.src = item;
      photosList.appendChild(newPhoto);
    });
  }


  newTemplate.querySelector('.popup__avatar').src = author.avatar;

  return newTemplate;
});

mapCanvas.appendChild(similarPopups[0]);
export { similarPopups };


