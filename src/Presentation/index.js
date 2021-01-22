import React from 'react';

import { useHomeContext } from 'Container'

import {
  TextInput,
  BarChart,
  PieChart,
} from 'Component';

import style from './style.module.scss';

const HomeGrapthSection = () => {
  const { currWeatherData } = useHomeContext();

  if (!Array.isArray(currWeatherData) || currWeatherData.length === 0) {
    return (
      <div className={style.grapthSection}>
        <p>Please wait....</p>
      </div>
    );
  }

  return (
    <div className={style.grapthSection}>
      <div className={style.graphItemContainer}>
        <BarChart data={currWeatherData} />
      </div>
      <div className={style.graphItemContainer}>
        <PieChart />
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
      <HomeGrapthSection />
      <TextInput
        value={currCity}
        onSubmit={value => setCurrCity(value)}
      />
    </div>
  )
};

export default HomePresentation;