import React from 'react';
import { Container } from './Layout.styled';
import ColumnSelect from '../ColumnSelect';
import ColumnInput from '../ColumnInput';
import ColumnResult from '../ColumnResult';

const Layout = () => {
  return (
    <Container fluid>
      <ColumnInput/>
      <ColumnSelect/>
      <ColumnResult value={'aaa'}/>
    </Container>
  );
}

export default Layout;
