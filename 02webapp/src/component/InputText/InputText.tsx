import React from 'react';

interface Props {
  onChange: (e) => void
}

const InputText = (props: Props) => {
  const onChange = props?.onChange;
  return (
    <input type='text'
      style={{ 
        width: '20rem',
        height: '2rem',
        margin: '1rem 0',
        textAlign: 'center',
        fontSize: '1.5rem'
      }}
      onChange={onChange}/>
  );
}

export default InputText;
