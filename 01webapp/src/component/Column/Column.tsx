import React from 'react';
import { Wrapper } from './Column.styled';

type OnChange = () => void

interface Props {
  children: React.ReactNode,
  wrapperStyle: object,
  onChange?: OnChange
}

const Column = (props: Props) => {
  const wrapperStyle = props.wrapperStyle;
  
  return (
    <Wrapper style={wrapperStyle}>
      {props.children}
    </Wrapper>
  );
}

export default Column;
