import React from 'react';
import { InputType } from '../../definition/input';

interface Props extends InputType {
  options: {
    value: string | number,
    label: string
  }[]
}

const Select = (props: Props) => {
  const onChange = props?.onChange;
  const options = props?.options;

  return (
    <select onChange={onChange}>
      {
        options?.map?.(opt => {
          return <option key={opt.value} value={opt.value}>{opt.label}</option>
        })
      }
    </select>
  );
}

export default Select;
