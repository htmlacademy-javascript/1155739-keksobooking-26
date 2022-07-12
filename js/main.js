import { offersArray } from './data.js';
import { renderCard } from './popup.js';

const map = document.querySelector('.map');

map.append(renderCard(offersArray[0]));
