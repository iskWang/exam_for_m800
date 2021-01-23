import React from 'react';

import style from './style.module.scss';

const COLOR_LIST = [
  '#CA423C',
  '#0B4373',
  '#2678BF',
  '#858C0E',
  '#6D7311',
];

const PieChart = (props) => {
  const sum = props.data.reduce((acc, curr) => {
    acc += curr.humidity;

    return acc;
  }, 0);

  let tempPercent = 0;

  const bgStyle = props.data.reduce((acc, curr, idx) => {
    const _currPercent = curr.humidity / sum * 100;
    tempPercent += _currPercent;

    acc += `${COLOR_LIST[idx]} 0 ${ tempPercent }%`;

    // except last
    if (idx !== props.data.length - 1) {
      acc += ', '
    }

    return acc;
  }, '')

  console.log({
    test: props.data,
  })

  const pieStyle = {
    background: `conic-gradient(${bgStyle})`
  }

  return (
    <div className={style.pieChartWrap}>
      <div className={style.pieChart} style={pieStyle} />
      <div className={style.noticeSection}>
        {
          props.data.map((el, idx) => (
            <div className={style.noticeItemRow}>
              <div
                className={style.noticeBlock}
                style={{ backgroundColor: COLOR_LIST[idx] }}
              />
              <span>{el.applicable_date}</span>
              <span>{el.humidity} deg</span>
              <span>{Number(el.humidity / sum * 100).toFixed(2)}%</span>
            </div>
          ))
        }
      </div>
    </div>
  )
};

PieChart.defaultProps = {
  data: [],
};

export default PieChart