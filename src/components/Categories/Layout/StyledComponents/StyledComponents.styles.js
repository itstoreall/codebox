import styled from 'styled-components';
import refs from '../../../../styles/refs';

export const Wrapper = styled.div`
  margin-bottom: 20px;
  padding-bottom: 100px;
  width: 100%;
  background-color: yellowgreen;
`;

export const BlockBasic = styled.div`
  padding: 20px;
  width: 100%;
  height: 100px;
  font-size: 20px;
  color: white;
  background-color: skyblue;
`;

export const BlockMiddle = styled.div`
  padding: 20px;
  width: 100%;
  height: 100px;
  font-size: 20px;
  color: white;
  background-color: palevioletred;
`;

export const BlockVip = styled.div`
  padding: 20px;
  width: 100%;
  height: 100px;
  font-size: 20px;
  color: white;
  background-color: pink;
`;

export const Btn = styled.button`
  padding: 0px;
  width: 48%;
  height: 50px;
  font-size: 16px;
  color: white;
  background-color: grey;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media screen and (max-width: ${refs.tabletMax}px) {
    &:not(:last-child) {
      margin-right: 4%;
    }
  }

  @media screen and (min-width: ${refs.tablet}px) {
    width: 150px;

    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  &:hover {
    background-color: black;
  }
`;
