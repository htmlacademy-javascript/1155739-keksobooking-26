
function getRandomNumber(min, max, afterDot) {
  if (min < -1 || max < 0 || min >= max) {
    return('Неверный диапазон! Укажите другие числа.');
  }
  return ( (Math.random() * (max - min) + min).toFixed(afterDot) );
}

getRandomNumber(1,2, 6);
