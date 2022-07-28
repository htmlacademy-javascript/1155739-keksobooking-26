import { makeDisabled } from './mode.js';

//Ошибка загрузки обьявлений
const showAdsError = () => {
  makeDisabled();
  const errorElement = document.createElement('div');
  errorElement.style.position = 'absolute';
  errorElement.style.top = '0';
  errorElement.style.right = '0';
  errorElement.style.left = '0';
  errorElement.style.color = 'white';
  errorElement.style.fontSize = '30px';
  errorElement.style.padding = '20px 35px';
  errorElement.style.backgroundColor = 'red';
  errorElement.style.textAlign = 'center';
  errorElement.textContent = 'Ошибка сервера';
  document.body.append(errorElement);
};

//Отправка обьявления
const sendDataSuccess = () => {
  const temlateElement = document.querySelector('#success')
    .content
    .querySelector('.success');
  const message = temlateElement.cloneNode(true);
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
  const temlateElement = document.querySelector('#error')
    .content
    .querySelector('.error');
  const messageElement = temlateElement.cloneNode(true);
  document.body.append(messageElement);


  const removeMessage = (evt) => {
    if (evt.type === 'keydown' && evt.key === 'Escape' || evt.type === 'click')  {
      evt.preventDefault();
      messageElement.remove();
    }};

  document.addEventListener('click', removeMessage);
  document.addEventListener('keydown', removeMessage);
  document.querySelector('.error__button').addEventListener('click', removeMessage);
};

export { showAdsError, sendDataSuccess, sendDataError };
