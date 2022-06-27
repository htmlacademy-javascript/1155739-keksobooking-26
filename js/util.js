//Calculate random numbers
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  return ( Math.round(Math.random() * (max - min) + min) );
};

getRandomInt();

const getRandomFloat = (min, max, digits = 1) => {
  if (min < 0 || max < 0) {

    return -1;
  }
  return ( (Math.random() * (max - min) + min).toFixed(digits));
};

getRandomFloat();

const getImageAddress = (number) => {
  const imageAddress = number.splice(getRandomInt(number), 1);
  return (imageAddress > 9) ? imageAddress :  `0${imageAddress}`;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export {getRandomInt, getRandomFloat, getImageAddress, shuffleArray};
