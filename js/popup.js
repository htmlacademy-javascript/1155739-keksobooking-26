import { numDecline } from './util.js';

//Мапа для типов
const apartmentType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const renderImages = (container, sources) => {
  const popupImage = container.querySelector('.popup__photo');
  container.innerHTML = '';

  const fragmentPhoto = document.createDocumentFragment();
  sources.forEach((link) => {
    const newPhoto = popupImage.cloneNode(true);
    newPhoto.src = link;
    fragmentPhoto.appendChild(newPhoto);
  });
  return fragmentPhoto;
};

//Находим шаблон
const elementTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

//Заполняем по шаблону
const renderCard = ({ author, offer }) => {
  const newTemplate = elementTemplate.cloneNode(true);

  //title
  const title = newTemplate.querySelector('.popup__title');
  if (offer.title) {
    title.textContent = offer.title;
  } else {title.remove();
  }

  //address
  const address = newTemplate.querySelector('.popup__text--address');
  if (offer.address) {
    address.textContent = offer.address;
  } else { address.remove();
  }
  //price
  const price = newTemplate.querySelector('.popup__text--price');
  if (offer.price) {
    price.textContent =`${offer.price} ₽/ночь`;
  } else { price.remove();
  }
  //capacity
  const capacity = newTemplate.querySelector('.popup__text--capacity');
  if (offer.rooms && offer.guests) {
    capacity.textContent = `${offer.rooms} ${  numDecline(offer.rooms, 'комната', 'комнаты', 'комнат')  }
  для ${offer.guests} ${  numDecline(offer.guests, 'гостя', 'гостей', 'гостей')}`;
  } else { capacity.remove();
  }
  //type
  const type = newTemplate.querySelector('.popup__type');
  if (offer.type) {
    type.textContent = apartmentType[offer.type];
  } else { type.remove();
  }
  //time
  const time = newTemplate.querySelector('.popup__text--time');
  if (offer.checkin && offer.checkout) {
    time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else { time.remove();
  }

  //description
  const description = newTemplate.querySelector('.popup__description');
  if (offer.description) {
    description.textContent = offer.description;
  } else { description.remove();
  }
  //features
  const features = newTemplate.querySelectorAll('.popup__feature');

  if (offer.features.length > 0) {
    const modifiers = offer.features.map((feature) => `popup__feature--${feature}` );
    features.forEach( (item) => {
      if ( !modifiers.includes(item.classList[1]) ) {
        item.remove();
      }});
  } else {newTemplate.querySelector('.popup__features').remove();
  }

  //pnotos
  const photoContainer = newTemplate.querySelector('.popup__photos');
  if (offer.photos.length > 0) {
    photoContainer.append(renderImages(photoContainer, offer.photos));
  } else {
    photoContainer.remove();
  }

  //avatar
  const avatar = newTemplate.querySelector('.popup__avatar');
  if (author.avatar) {
    avatar.src = author.avatar;
  } else { avatar.remove();
  }


  return newTemplate;
};

export { renderCard };

