import React from 'react';

import { useHomeContext } from 'Container'

import {
  TextInput,
} from 'Component';

import style from './style.module.scss';

const HomePresentation = () => {
  const {
    currCity,
    setCurrCity,
  } = useHomeContext();

  return (
    <div className={style.wrap}>
      <p>Hello world</p>
      <TextInput
        value={currCity}
        onSubmit={value => setCurrCity(value)}
      />
    </div>
  )
};

export default HomePresentation;