import React from 'react';
import Column from '../Column';
import Input from '../Input';

const ColumnSelect = () => {
  const options = [
    { value: 'prime', label: 'isPrime' },
    { value: 'fibonacci', label: 'isFibonacci' }
  ]
  return (
      <Input.Select options={options}/>
    <Column wrapperStyle={{ flexGrow: 1, minWidth: 100 }}>
    </Column>
  );
}

export default ColumnSelect;
