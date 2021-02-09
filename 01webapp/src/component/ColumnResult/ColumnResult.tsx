import React from 'react';
import Column from '../Column';

interface Props {
  value: string
}

const ColumnResult = (props: Props) => {
  const value = props?.value;
  return (
    <Column wrapperStyle={{ width: 300 }}>
      {value || ''}
    </Column>
  );
}

export default ColumnResult;
