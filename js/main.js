import { offersArray } from './data.js';
import { renderCard } from './popup.js';
import {makeDisabled} from './form.js';

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.append(renderCard(offersArray[0]));

