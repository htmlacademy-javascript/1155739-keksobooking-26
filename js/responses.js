import { renderPinMarker } from './map.js';

const MAX_OFFERS = 10;

//Звгрузка обьявлений
let offers = [];
const showAds = (data) => {
  offers = data.slice();
  renderPinMarker(offers.slice(0, MAX_OFFERS));
};

//Ошибка загрузки обьявлений
const showAdsError = () => {
  const errorMessage = document.createElement('div');
  errorMessage.style.position = 'absolute';
  errorMessage.style.top = '0';
  errorMessage.style.right = '0';
  errorMessage.style.left = '0';
  errorMessage.style.color = 'white';
  errorMessage.style.fontSize = '25px';
  errorMessage.style.backgroundColor = 'red';
  errorMessage.style.textAlign = 'center';
  errorMessage.textContent = 'Ошибка сервера';
  document.body.append(errorMessage);
};

//Отправка обьявления
const sendDataSuccess = () => {
  const temlate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const message = temlate.cloneNode(true);
  document.body.append(message);

  const removeMessage = (evt) => {
    if (evt.type === 'keydown' && evt.key === 'Escape' || evt.type === 'click')  {
      evt.preventDefault();
      message.remove();
    }};

  document.addEventListener('click', removeMessage);
  document.addEventListener('keydown', removeMessage);
};

//Ошибка отправки обьявления
const sendDataError = () => {
  const temlate = document.querySelector('#error')
    .content
    .querySelector('.error');
  const message = temlate.cloneNode(true);
  document.body.append(message);


  const removeMessage = (evt) => {
    if (evt.type === 'keydown' && evt.key === 'Escape' || evt.type === 'click')  {
      evt.preventDefault();
      message.remove();
    }};

  document.addEventListener('click', removeMessage);
  document.addEventListener('keydown', removeMessage);
  document.querySelector('.error__button').addEventListener('click', removeMessage);
};

export { showAds, showAdsError, sendDataSuccess, sendDataError };
