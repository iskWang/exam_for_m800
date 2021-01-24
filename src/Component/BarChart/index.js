import React from 'react';
import cx from 'classname';

import style from './style.module.scss';

const BAR_WIDTH = 150;

const BarChart = (props) => {
  const maxDeg = Math.max(...props.data.map(el => el.max_temp)) + Math.abs(
    Math.min(...props.data.map(el => el.min_temp)
  ));

  const handleMinStyle = (item) => {
    let width = 0;

    if (item.min_temp <= 0) {
      width = 0;
    } else {
      width = (item.min_temp / maxDeg) * BAR_WIDTH;
    }

    width += 'px';

    return {
      width,
    }
  }

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
                  <span>{Number(item.max_temp).toFixed(0)}</span>
                </div>
                <div
                  className={cx(style.barGraph, style.min)}
                  style={handleMinStyle(item)}
                >
                  <span>{ item.min_temp <= 0 ? 0 : Number(item.min_temp).toFixed(0)}</span>
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