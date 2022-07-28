const getNumDecline = (num, nominative, genitiveSingular, genitivePlural) => {
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

const getAddressCoordinates = (form, coordinates) => {
  form.value = `${(coordinates.lat).toFixed(5)}, ${(coordinates.lng).toFixed(5)}`;
};

const debounce = (cb, timeout) => {
  let timer;
  return (...rest) => {
    clearTimeout(timer);
    timer = setTimeout(() => { cb.apply(this, rest); }, timeout);
  };
};

export { getNumDecline, getAddressCoordinates, debounce };
