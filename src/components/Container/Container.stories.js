import React from 'react';
import Container from './Container';
import Card from '../Card/Card';

export default {
  title: 'Components/Container',
  component: Container,
};

export const Default = () => (
  <Container>
    <Card title="Card Title" content="This is the content of the card." />
  </Container>
);

export const Fluid = () => (
  <Container fluid>
    <Card title="Card Title" content="This is the content of the card." />
  </Container>
);
