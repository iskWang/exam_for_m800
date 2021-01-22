import React from 'react';

import style from './style.module.scss';

const TextInput = (props) => (
  <div>
    <input type="text" />
    <button className={style.btn}>Submit</button>
  </div>
)

TextInput.defaultProps = {
  value: '',
  onChange: () => {},
  onSubmit: () => {},
}

export default TextInput;