export default class ApiPhotos {
  static getPhotos() {
    const mars_url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-02-7&api_key=bUhlwLjzTZ21PGaDtooSZ3xg5HGyjXksgKgEq8j2';
    //simulate error scenario
    // return new Promise((resolve, reject) => {
    //   setTimeout(reject("error"), 2500);
    // });

    return fetch(mars_url).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
