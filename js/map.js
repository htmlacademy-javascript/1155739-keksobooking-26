import {getAddressCoordinates} from './util.js';
import {offersArray} from './data.js';
import { renderCard } from './popup.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const disabledFields = document.querySelectorAll('select.map__filter, fieldset');
const address = adForm.querySelector('#address');
address.setAttribute('readonly', true);

const L = window.L;
const CENTER_COORDINATES = {lat: 35.69034, lng: 139.75175};
const ZOOM = 12;

const disabledToggle = () => {
  disabledFields.forEach((line) => {
    line.disabled = !line.disabled;
  });
};

const makeDisabled = () => {
  adForm.classList.toggle('ad-form--disabled');
  mapFilters.classList.toggle('map__filters--disabled');

  disabledToggle();
  address.value = `${CENTER_COORDINATES.lat}, ${CENTER_COORDINATES.lng}`;};

makeDisabled();

//МАПА
const map = L.map('map-canvas')
  .on('load', () => {
    makeDisabled();
  })
  .setView({
    lat: CENTER_COORDINATES.lat,
    lng: CENTER_COORDINATES.lng,
  }, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//создаем иконки пинов
const MAIN_PIN = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

const PIN = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

//добавляем главный пин на карту
const mainPinMarker = L.marker(
  CENTER_COORDINATES, {
    draggable: true,
    icon: MAIN_PIN,
  },
);

//висчитываем координаты пина
mainPinMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  getAddressCoordinates(address, coordinates);

});

mainPinMarker.addTo(map);

//создаем слой и каhточки пинов
const markerGroup = L.layerGroup().addTo(map);

const createPinMarker = (card) => {
  const pinMarker = L.marker(
    card.location, {
      icon: PIN,
    },
  );

  pinMarker
    .addTo(markerGroup)
    .bindPopup(
      renderCard(card));};

offersArray.forEach((card) => {
  createPinMarker(card);
});


