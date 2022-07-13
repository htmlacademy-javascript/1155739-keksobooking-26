import { offersArray } from './data.js';
import { renderCard } from './popup.js';

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.append(renderCard(offersArray[0]));
