import React from 'react';
import { Container } from './styles'

export default function Button({
  Icon: icon, 
  children, 
  title, 
  color, 
  background, 
  borderRadius, 
  hoverBackground, 
  ...props 
}) {
    return (
        <Container {...props} style={{ backgroundColor: background, color, borderRadius }}>
            {icon && <img className='iconImg' src={icon} alt="Ícone" />}
            <h1>{title}</h1>
        </Container>
    );
}
