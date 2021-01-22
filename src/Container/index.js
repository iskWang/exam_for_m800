import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import Api from 'Api';

export const HomeContext = React.createContext(null);
export const useHomeContext = () => useContext(HomeContext);

const HomeContainer = (props) => {
  const [currCity, setCurrCity] = useState('Taipei');
  const [currWeatherData, setCurrentWeatherData] = useState([]);

  const fetchData = (city) => {
    if (!city) return;

    setCurrentWeatherData([]);

    Api.getLocationCode(city)
    .then(response => response.data[0]?.woeid)
    .then(worldId => Api.getWeatherData(worldId))
    .then(response => response.data?.consolidated_weather)
    .then(weatherData => setCurrentWeatherData(weatherData))
  }

  useEffect(() => {
    fetchData(currCity);
  }, [currCity])

  return (
    <HomeContext.Provider
      value={{
        currCity,
        setCurrCity,
        currWeatherData,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  )
};

export default HomeContainer;