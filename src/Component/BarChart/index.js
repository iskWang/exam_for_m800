import React from 'react';
import cx from 'classname';

import style from './style.module.scss';

const BAR_WIDTH = 150;

const BarChart = (props) => {
  const maxDeg = Math.max(...props.data.map(el => el.max_temp));

  return (
    <div className={style.barChart}>
      {
        props.data.map(item => {
          return (
            <div key={item.id} className={style.itemRow}>
              <p>{item.applicable_date}</p>
              <div className={style.barColumn}>
                <div
                  className={cx(style.barGraph, style.max)}
                  style={{
                    width: (item.max_temp / maxDeg) * BAR_WIDTH + 'px',
                  }}
                >
                  <span>{item.max_temp}</span>
                </div>
                <div
                  className={cx(style.barGraph, style.min)}
                  style={{
                    width: (item.min_temp / maxDeg) * BAR_WIDTH + 'px',
                  }}
                >
                  <span>{item.min_temp}</span>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

BarChart.defaultProps = {
  data: [],
}

export default BarChart