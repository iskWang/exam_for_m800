import React from 'react';

import { useHomeContext } from 'Container'

import {
  TextInput,
  BarChart,
  PieChart,
  Loading,
} from 'Component';

import style from './style.module.scss';

const HomeGraphSection = () => {
  const { currWeatherData } = useHomeContext();

  const isLoading = !Array.isArray(currWeatherData) || currWeatherData.length === 0;

  return (
    <div className={style.graphSection}>
      <div className={style.graphItemContainer}>
        {
          isLoading
            ? <Loading />
            : <BarChart data={currWeatherData} />
        }
      </div>
      <div className={style.graphItemContainer}>
        {
          isLoading
          ? <Loading />
          : <PieChart data={currWeatherData} />
        }
      </div>
    </div>
  )
}

const HomePresentation = () => {
  const {
    currCity,
    setCurrCity,
  } = useHomeContext();

  return (
    <div className={style.wrap}>
      <HomeGraphSection />
      <TextInput
        value={currCity}
        onSubmit={value => setCurrCity(value)}
      />
    </div>
  )
};

export default HomePresentation;