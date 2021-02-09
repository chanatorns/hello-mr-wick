import React from 'react';
import { Content, TableWrapper } from './Table.styled';

interface Props {
  data: string[],
  columnCount: number
}

const Layout = (props: Props) => {
  const { data } = props;

  return (
    <TableWrapper>
      {
        data.map((d, i) => {
          return <Content key={d + i}>{d}</Content>
        })
      }
      <Content style={{ opacity: 0 }}/>
      <Content style={{ opacity: 0 }}/>
      <Content style={{ opacity: 0 }}/>
    </TableWrapper>
  );
}

export default Layout;
