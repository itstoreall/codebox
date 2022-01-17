// import React, { Suspense, lazy } from 'react';
import Routes from '../../../Routes';
import Container from '../../Container';

const Main = () => (
  <main className="main">
    <Container>{Routes()}</Container>
  </main>
);

export default Main;
