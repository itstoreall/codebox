import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 400px;
  background-color: pink;
`;

export const BlockBasic = styled.div`
  padding: 20px;
  width: 100%;
  height: 100px;
  font-size: 20px;
  color: white;
  background-color: skyblue;
`;

export const BlockReferal = styled.div`
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
  background-color: grey;
`;

export const Btn = styled.button`
  padding: 0px;
  width: 120px;
  height: 50px;
  font-size: 16px;
  color: white;
  background-color: grey;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &:hover {
    background-color: black;
  }
`;
