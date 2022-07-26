const Urls = {
  GET: 'https://26.javascript.pages.academy/keksobooking/data',
  POST: 'https://26.javascript.pages.academy/keksobooking'
};

const makeRequest = (onSuccess, onFail, method, body) => {
  fetch(
    Urls[method],
    {
      method: method,
      body: body,
    },
  )
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onFail(err);
    });
};

export { makeRequest };
