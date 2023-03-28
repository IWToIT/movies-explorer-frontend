class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getMovies() {
    return this._getFetch();
  }

  _getFetch() {
    return fetch(this._baseUrl, {
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }
}

export const api = new Api('https://api.nomoreparties.co/beatfilm-movies', {
  'Content-Type': 'application/json',
});
