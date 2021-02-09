import React from 'react';

type OnChange = () => void

interface Props {
  options: {
    value: string | number,
    label: string
  }[]
  onChange?: OnChange
}

const Column = (props: Props) => {
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

export default Column;
