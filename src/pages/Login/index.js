import React from 'react';

import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Hello</small>
      </Title>
      <p>Lorem ipsum dot</p>
    </Container>
  );
}
