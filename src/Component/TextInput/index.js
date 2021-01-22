import React, { useState } from 'react';

import style from './style.module.scss';

const TextInput = (props) => {
  const [tempText, setTempText] = useState(props.value);

  const _onSubmit = (e) => {
    e.preventDefault();

    props.onSubmit(tempText);
  }

  const _onChange = (e) => {
    setTempText(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={tempText}
        onChange={_onChange}
      />
      <button className={style.btn} onClick={_onSubmit}>Submit</button>
    </div>
  )
}

TextInput.defaultProps = {
  onSubmit: () => {},
}

export default TextInput;