import React from 'react';
import Column from '../Column';
import Input from '../Input';

const ColumnSelect = () => {
  const options = [
    { value: 'prime', label: 'isPrime' },
    { value: 'fibonacci', label: 'isFibonacci' }
  ]
  return (
    <Column wrapperStyle={{ width: '100%', minWidth: 100 }}>
      <Input.Select options={options}/>
    </Column>
  );
}

export default ColumnSelect;
