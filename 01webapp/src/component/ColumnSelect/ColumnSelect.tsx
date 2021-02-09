import React from 'react';
import { CALCULATE_TYPE } from '../../const/calculate';
import { InputType } from '../../definition/input';
import Column from '../Column';
import Input from '../Input';

interface Props extends InputType {}

const options = [
  { value: CALCULATE_TYPE.PRIME, label: 'isPrime' },
  { value: CALCULATE_TYPE.FIBONACCI, label: 'isFibonacci' }
]

const ColumnSelect = (props: Props) => {
  return (
    <Column wrapperStyle={{ flexGrow: 1, minWidth: 100 }}>
      <Input.Select options={options} onChange={props.onChange}/>
    </Column>
  );
}

export default ColumnSelect;
