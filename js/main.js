function getRandomNumber(min, max) {
  if (min < 0 || max < 0) {
    return -1;
    }
  return ( Math.round(Math.random() * (max - min) + min) );
}

getRandomNumber();

function getRandomNumber2(min, max, afterDot) {
  if (min < 0 || max < 0) {
    return -1;
    }
  return ( (Math.random() * (max - min) + min).toFixed(afterDot) );
}

getRandomNumber2();
