//Calculate random numbers
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  return (Math.round(Math.random() * (max - min) + min));
};

getRandomInt();

const getRandomFloat = (min, max, digits = 1) => {
  if (min < 0 || max < 0) {

    return -1;
  }
  return ((Math.random() * (max - min) + min).toFixed(digits));
};

getRandomFloat();

const getImageAddress = (number) => {
  if (number >= 10) {
    return `img/avatars/user${number}.png`;
  }
  return `img/avatars/user0${number}.png`;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  if(num > 10 && (Math.round((num % 100) / 10)) === 1){
    return genitivePlural;
  }
  switch(num % 10){
    case 1: return nominative;
    case 2:
    case 3:
    case 4: return genitiveSingular;
  }
  return genitivePlural;
};

const getAddressCoordinates = (coordinates) => {
  addressForm.value = `${(coordinates.lat).toFixed(5)}, ${(coordinates.lng).toFixed(5)}`;
};

export { numDecline, getRandomInt, getRandomFloat, getImageAddress, shuffleArray, getAddressCoordinates };
