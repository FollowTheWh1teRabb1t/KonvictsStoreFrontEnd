import React from 'react';
import { Container } from './styles';

// Importando as imagens dos bancos
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';
import four from '../../assets/4.png';
import five from '../../assets/5.png';
import six from '../../assets/6.png';
import seven from '../../assets/7.png';
import eight from '../../assets/8.png';
import nine from '../../assets/9.png';
import ten from '../../assets/10.png';

export default function Footer() {
  return (
    <Container>
      <div className="footer-container">
        {/* Seção Institucional */}
        <div className="footer-section">
          <h4>Institucional</h4>
          <ul>
            <li>Empresa</li>
            <li>Como comprar</li>
            <li>Segurança</li>
            <li>Envio</li>
            <li>Pagamento</li>
            <li>Tempo de Garantia</li>
            <li>Listas</li>
            <li>Notícias</li>
            <li>Política de Privacidade</li>
            <li>Variação de produtos</li>
            <li>Contato</li>
          </ul>
        </div>

        {/* Seção Atendimento */}
        <div className="footer-section">
          <h4>Atendimento</h4>
          <ul>
            <li>📞 (00) 0000-0000</li>
            <li>📱 (00) 00000-0000</li>
            <li>📧 atendimento@loja.com.br</li>
          </ul>
        </div>

        {/* Seção Redes Sociais */}
        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <ul>
            <li>🔵 Facebook</li>
            <li>🐦 X</li>
            <li>📸 Instagram</li>
            <li>🎥 YouTube</li>
            <li>🔗 LinkedIn</li>
          </ul>
        </div>

        {/* Seção Formas de Pagamento */}
        <div className="footer-section">
          <h4>Formas de Pagamento</h4>
          <ul>
            <li><img src={one} alt="Banco 1" /></li>
            <li><img src={two} alt="Banco 2" /></li>
            <li><img src={three} alt="Banco 3" /></li>
            <li><img src={four} alt="Banco 4" /></li>
            <li><img src={five} alt="Banco 5" /></li>
            <li><img src={six} alt="Banco 6" /></li>
            <li><img src={seven} alt="Banco 7" /></li>
            <li><img src={eight} alt="Banco 8" /></li>
            <li><img src={nine} alt="Banco 9" /></li>
            <li><img src={ten} alt="Banco 10" /></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Selos de Segurança</h4>
          <ul>
            <li>✔️ Google Safe Browsing</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          KONVICTS STORE ECOMMERCE LTDA – CNPJ: 00.000.000/0001-31 © Todos os direitos reservados.
          <br />
          Os preços exibidos nessa loja são fictícios e servem apenas para demonstração.
        </p>
        <p>KONVICTS STORE ECOMMERCE</p>
      </div>
    </Container>
  );
}
