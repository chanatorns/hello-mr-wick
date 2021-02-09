import React from 'react';
import { InputType } from '../../definition/input';
import Column from '../Column';
import Input from '../Input';

interface Props extends InputType {}

const ColumnInputText = (props: Props) => {
  return (
    <Column wrapperStyle={{ width: 200 }}>
      <Input.Number onChange={props.onChange}/>
    </Column>
  );
}

export default ColumnInputText;
