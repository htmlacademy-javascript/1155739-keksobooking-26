import {getAddressCoordinates} from './util.js';
import { renderCard } from './popup.js';
import { makeDisabled } from './mode.js';
import { showAds, showAdsError } from './responses.js';
import { request } from './api.js';

const address = document.querySelector('#address');
address.value = '35.69034, 139.75175';

const CENTER_COORDINATES = {lat: 35.69034, lng: 139.75175};
const ZOOM = 12;

const L = window.L;
const map = L.map('map-canvas');

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

const renderPinMarker = (data) =>
  data.forEach(createPinMarker);

//Переход в дефолтное состояние
const mapReset = () => {
  mainPinMarker.setLatLng(CENTER_COORDINATES);
  map.setView(CENTER_COORDINATES, ZOOM);
  map.closePopup();
};


map.on('load', () => {
  makeDisabled();
  mapReset();
  request(showAds, showAdsError, 'GET');
  address.value = `${CENTER_COORDINATES.lat}, ${ CENTER_COORDINATES.lng}`;
}).setView(CENTER_COORDINATES, ZOOM);

export {renderPinMarker, CENTER_COORDINATES, mapReset };
