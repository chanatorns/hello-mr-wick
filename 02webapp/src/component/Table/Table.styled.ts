import styled from 'styled-components';

export const TableWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Content = styled.div`
  width: 32%;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  margin: 2px;
  border-radius: 2px;

  @media screen and (max-width: 992px) {
    width: 48%
  }

  @media screen and (max-width: 600px) {
    width: 100%
  }
`;
