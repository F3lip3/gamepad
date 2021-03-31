import styled from 'styled-components/native';

export const Plate = styled.View`
  align-items: center;
  justify-content: center;

  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  background-color: #fff;
  opacity: 0.3;
`;

export const Handler = styled.View`
  align-items: center;
  justify-content: center;

  height: ${props => props.size / 2}px;
  width: ${props => props.size / 2}px;
  border-radius: ${props => props.size / 4}px;
  background-color: rgba(0, 0, 0, 0.45);
  border: 5px solid rgba(0, 0, 0, 0.3);
`;
