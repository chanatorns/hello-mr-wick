import React, { ChangeEvent, useEffect, useState } from 'react';
import { Container } from './Layout.styled';
import ColumnSelect from '../ColumnSelect';
import ColumnResult from '../ColumnResult';
import ColumnInputText from '../ColumnInput/ColumnInputText';
import { CALCULATE_TYPE } from '../../const/calculate';
import { isFibonacci, isPrime } from '../../utils/math';

const onInputChange = (e: ChangeEvent, setNumber) => {
  const value = (e.target as HTMLInputElement).value;
  setNumber(value);
}

const onSelectChange = (e: ChangeEvent, setCalculateType) => {
  const value = (e.target as HTMLSelectElement).value;
  setCalculateType(value);
}

const computeResult = (
  number: number,
  calculateType: string,
  setResult
) => {
  let result = null;

  if (calculateType === CALCULATE_TYPE.FIBONACCI) {
    result = isFibonacci(number);
  } else if (calculateType === CALCULATE_TYPE.PRIME) {
    result = isPrime(number);
  }

  if (result !== null) {
    setResult(result)
  }
}

const Layout = () => {
  const [number, setNumber] = useState(null);
  const [calculateType, setCalculateType] = useState(CALCULATE_TYPE.PRIME);
  const [result, setResult] = useState(null);
  useEffect(() => {
    computeResult(number, calculateType, setResult)
  }, [number, calculateType])

  return (
    <Container fluid>
      <ColumnInputText onChange={e => onInputChange(e, setNumber)}/>
      <ColumnSelect onChange={e => onSelectChange(e, setCalculateType)}/>
      <ColumnResult value={result?.toString()}/>
    </Container>
  );
}

export default Layout;
