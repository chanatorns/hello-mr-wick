import React from 'react';

type OnChange = () => void

interface Props {
  onChange?: OnChange
}

const Column = (props: Props) => {
  const onChange = props?.onChange;

  return (
    <input type='text' onChange={onChange}/>
  );
}

export default Column;
