import { offersArray } from './data.js';
import { renderCard } from './popup.js';
// import {makeDisabled} from './map.js';
import './form.js'

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.append(renderCard(offersArray[0]));




