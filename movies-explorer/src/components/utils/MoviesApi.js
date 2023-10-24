export const getMovies = () => {
  return fetch('https://api.nomoreparties.co/beatfilm-movies', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.text().then((text) => {
        throw JSON.parse(text).message || JSON.parse(text).error;
      });
    });
};