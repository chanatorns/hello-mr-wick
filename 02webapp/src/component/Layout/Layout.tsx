import React, { useEffect, useState } from 'react';
import { getCategories } from '../../api/publiccapis';
import InputText from '../InputText';
import Table from '../Table';
import { Container } from './Layout.styled';
import { useWindowSize } from 'react-use';

const fetchCatgories = async (setCat) => {
  const result = await getCategories();
  setCat(result?.categories || []);
}

const filterCat = (cat, filter) => {
  if (!filter) {
    return cat;
  }

  const filtered = cat.filter(c => {
    return c.toLowerCase().includes(filter.toLowerCase());
  })

  return filtered;
}

const onInputTextChange = (e, setFilter) => {
  const filterValue = e.target.value;
  setFilter(filterValue);
}

const computeColumnCount = (w) => {
  return w % 300;
}

const Layout = () => {
  const [cat, setCat] = useState([]);
  const [filter, setFilter] = useState(null);
  const { width: windowsWidth } = useWindowSize();

  useEffect(() => {
    fetchCatgories(setCat);
  }, [])

  const catView = filterCat(cat, filter)
  const columnCount = computeColumnCount(windowsWidth);

  return (
    <Container fluid>
      <Container>
        <InputText onChange={e => onInputTextChange(e, setFilter)}/>
        <Table data={catView} columnCount={columnCount}/>
      </Container>
    </Container>
  );
}

export default Layout;
