import { numDecline } from './util.js';
import { offersArray } from './data.js';

//Мапа для типов
const apartmentType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

//
const renderFeatures = (container, userFeatures) => {
  const list = container.querySelectorAll('li');

  list.forEach((item) => {
    if (userFeatures.indexOf(item.classList[1].replace('popup__feature--', '')) === -1) {
      item.remove();
    }
  }
  );
};

//Находим шаблон
const mapCanvas = document.querySelector('#map-canvas');
const elementTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


//Заполняем по шаблону
const renderCard = ({offer, author}) => {
  const newTemplate = elementTemplate.cloneNode(true);

  //title
  const title = newTemplate.querySelector('.popup__title');
  if (offer.title) {
    title.textContent = offer.title;
  } title.remove();


  //address
  const address = newTemplate.querySelector('.popup__text--address');
  if (offer.address) {
    address.textContent = offer.address;
  } address.remove();

  //price
  const price = newTemplate.querySelector('.popup__text--price');
  if (offer.price) {
    price.textContent =`${offer.price} ₽/ночь`;
  } price.remove();

  //capacity
  const capacity = newTemplate.querySelector('.popup__text--capacity');
  if (offer.rooms && offer.guests) {
    capacity.textContent = `${offer.rooms}${  numDecline(offer.rooms, 'комната', 'комнаты', 'комнат')  }
  для ${offer.guests}${  numDecline(offer.guests, 'гостя', 'гостей', 'гостей')}`;
  } capacity.remove();

  //type
  const type = newTemplate.querySelector('.popup__type');
  if (offer.type) {
    type.textContent = apartmentType[offer.type];
  } type.remove();


  //description
  const description = newTemplate.querySelector('.popup__description');
  if (offer.description) {
    description.textContent = offer.description;
  } description.remove();

  //features
  const features = newTemplate.querySelector('.popup__reatures');
  if (offer.features.length > 0) {
    renderFeatures(offer.features, features);
  } features.remove();

  //pnotos
  const photos = newTemplate.querySelector('.popup__photos');
  if (offer.photos.length > 0) {
    offer.photos.forEach((item) => {
      const newPhoto = photos.querySelector('.popup__photo').cloneNode(true);
      newPhoto.src = item;
      photos.appendChild(newPhoto);
    });} photos.remove();

  //avatar
  const avatar = newTemplate.querySelector('.popup-avatar');
  if (author.avatar) {
    avatar.src = author.avatar;
  } avatar.remove();

  return newTemplate;
};

mapCanvas.appendChild(renderCard(offersArray[0]));
export { renderCard };


//Заполненяем по шаблону
// const makeCard = ({offer, author}) => {
//   const newTemplate = elementTemplate.cloneNode(true);

//   newTemplate.querySelector('.popup__title').textContent = offer.title;
//   newTemplate.querySelector('.popup__text--address').textContent = offer.address;
//   newTemplate.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
//   newTemplate.querySelector('.popup__type').textContent = apartmentType[offer.type];
//   newTemplate.querySelector('.popup__text--capacity').textContent = `${offer.rooms}${  numDecline(offer.rooms, 'комната', 'комнаты', 'комнат')  } для ${offer.guests}${  numDecline(offer.guests, 'гостя', 'гостей', 'гостей')}`;
//   newTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

//   //Проверяем наличие фич
//   const featureList = newTemplate.querySelectorAll('.popup__feature');
//   const classContains = (userFeature) => {
//     if (!featureList.classList.(`popup__feature--${userFeature}`))
//     {featureList.remove();} };
//   classContains();

//   //Скрываем описание если его нет
//   if (offer.description.length === 0) {
//     newTemplate.querySelector('.popup__description').remove();
//   } else {
//     newTemplate.querySelector('.popup__description').textContent = offer.description;
//   }

//   //Выводим фотографии
//   const photosList = newTemplate.querySelector('.popup__photos');
//   const newPhotoTemplate = photosList.querySelector('.popup__photo');

//   if (offer.photos.length === 0) {
//     photosList.remove();
//   } else {
//     offer.photos.forEach((item) => {
//       const newPhoto = newPhotoTemplate.cloneNode(true);
//       newPhoto.src = item;
//       photosList.appendChild(newPhoto);
//     });
//   }


//   newTemplate.querySelector('.popup__avatar').src = author.avatar;
//   return newTemplate;
// };


//переписать на возврат, вывести карточку в мейн дж, чекнуть дату опять и вывести в консоль

