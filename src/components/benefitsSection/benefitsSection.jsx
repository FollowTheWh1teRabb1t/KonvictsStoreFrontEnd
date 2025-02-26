import React from 'react';
import { Section } from './styles'
import { FaTruck, FaCreditCard, FaCoins, FaPiggyBank } from 'react-icons/fa'; 

export default function BenefitsSection() {
    return (
      <Section>
        <div className="benefit">
          <FaTruck className="icon" />
          <p>Frete grátis em compras acima de R$ 29</p>
        </div>
  
        <div className="benefit">
          <FaCreditCard className="icon" />
          <p>Até 3 parcelas extras sem juros</p>
        </div>
  
        <div className="benefit">
          <FaCoins className="icon" />
          <p>Cashback em compras e pagamentos</p>
        </div>
  
        <div className="benefit">
          <FaPiggyBank className="icon" />
          <p>Seu dinheiro rende muito na nossa loja</p>
        </div>
      </Section>
    );
  }