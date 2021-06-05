import React from 'react';

import { Container } from './styles';

const Tooltip = ({
  children,
  className = '',
  title,
  ...rest
}) => (
  <Container className={className}>
    {children}
    <span {...rest}>{title}</span>
  </Container>
);

export default Tooltip;
