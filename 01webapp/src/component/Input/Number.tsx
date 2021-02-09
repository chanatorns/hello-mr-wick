import React from 'react';
import { InputType } from '../../definition/input';

interface Props extends InputType {}

const Number = (props: Props) => {
  const onChange = props?.onChange;

  return (
    <input type='number' onChange={onChange}/>
  );
}

export default Number;
