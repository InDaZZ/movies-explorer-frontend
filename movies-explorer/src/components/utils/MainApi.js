export default class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.bas_url = "https://api.nomoreparties.co";
    this.headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.text().then((text) => {
      throw JSON.parse(text).message || JSON.parse(text).error;
    });
  }

  register({ name, email, password }) {
    return fetch(this.url + '/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
      .then(this._handleResponse)
  };

  authorize({ email, password }) {
    return fetch(this.url + '/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(this._handleResponse)
  };


  checkToken() {
    return fetch(this.url + '/users/me', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(this._handleResponse)
  };

  getUserInfo() {
    return fetch(this.url + '/users/me', {
     
      credentials: 'include',
      headers: this.headers
    })
      .then(this._handleResponse)

  };

  setUserInfo({ data }) {
    return fetch(this.url + '/users/me',
      {
        method: 'PATCH',
        credentials: 'include',
        headers: this.headers,
        body: JSON.stringify(data)
      }
    )
      .then(this._handleResponse)
  }

  userExit() {
    return fetch(this.url + '/signout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(this._handleResponse)
  }

  getSavedMovies() {
    return fetch(this.url + '/movies', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(this._handleResponse)
  };

  saveMovie(movie) {
    return fetch(this.url + '/movies', {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: this.bas_url + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: `${this.bas_url}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    })
      .then(this._handleResponse)
  };

  deleteMovie = (movieId) => {
    return fetch(this.url + '/movies/' + movieId, {
      method: "DELETE",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(this._handleResponse)

  };
};



export const api = new Api({
  url: 'https://api.movies-project.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json',
  }
});