
const mars_url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-02-7&api_key=DEMO_KEY';

export default class ApiPhotos {
  static requestHeaders() {
    return {};
  }

  static getPhotos() {
    const headers = this.requestHeaders();
    const request = new Request(mars_url, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}
