import styled from 'styled-components';

interface ContainerProps {
  bgColor?: string,
  fluid?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  margin: auto;
  max-width: ${props => props.fluid ? 'none' : '1000px'};
  background-color: ${props => props.bgColor};
  text-align: center;
  min-width: 600px;
`;
