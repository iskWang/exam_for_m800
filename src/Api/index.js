import axios from 'axios';

const Api = {
  getLocationCode: (city) => axios.get(
    'https://www.metaweather.com/api/location/search', {
    params: {
      query: city,
    }
  }),
  getWeatherData: (id) => axios.get(`https://www.metaweather.com/api/location/${id}`),
};

export default Api;