import React from 'react';
import { InputType } from '../../definition/input';

interface Props extends InputType {}

const Text = (props: Props) => {
  const onChange = props?.onChange;

  return (
    <input type='text' onChange={onChange}/>
  );
}

export default Text;
