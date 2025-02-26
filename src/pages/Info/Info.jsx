// pages/Success/Success.js
import React from 'react';
import Header from '../../components/header/header'
import { Container } from './styles';
import  product1 from '../../assets/product1.png';
import  product2 from '../../assets/product2.png';
import  product3 from '../../assets/product3.png';
import BenefitsSection from '../../components/benefitsSection/benefitsSection';
import  marioImg from '../../assets/marioImg.png';
import  arcadeImg from '../../assets/arcadeImg.png';
import  angelImg from '../../assets/angelImg.png';     
 
export default function Info() { 
    return (
        <Container>
            <Header/>
            <div className='contentEnvelope'>
                    <img className='marioImg' src={marioImg} alt="" />
                    <img className='arcadeImg' src={arcadeImg} alt="" />
                <div className='descriptionBox'>
                    <p>
                    A <span>Konvicts Store</span> é a loja número 1 para gamers exigentes! Especializada em produtos gamers importados, trazemos para você os melhores preços e as mais avançadas tecnologias do mercado. Se você busca equipamentos de última geração, acessórios de qualidade e produtos que vão turbinar sua experiência de jogo, você está no lugar certo!

                    Apoio a múltiplos métodos de pagamento: Sabemos como é importante para você a agilidade e facilidade na hora de pagar. Pensando nisso, oferecemos suporte para pagamentos via PIX e cartão de crédito, para garantir uma experiência de compra rápida e sem complicações. Com essas opções, você pode escolher o meio de pagamento que melhor se adapta ao seu estilo de vida e aproveitar ao máximo seus novos produtos de alto desempenho.

                    Na Konvicts Store, cada detalhe é pensado para oferecer qualidade e inovação. Trabalhamos com produtos importados, buscando sempre os melhores fornecedores do mercado global, para garantir que você tenha acesso a tecnologias de ponta, seja em placas de vídeo, headsets, teclados mecânicos, ou qualquer outro acessório que potencialize sua jogabilidade.

                    Por que escolher a Konvicts Store?
                    Preço competitivo e ofertas imperdíveis!
                    Produtos 100% importados com garantia de qualidade.
                    Pagamento facilitado via PIX e cartão de crédito.
                    Tecnologia de ponta para você estar sempre à frente nas batalhas.
                    Junte-se aos melhores jogadores!
                    A Konvicts Store não é apenas uma loja, é um universo gamer pronto para levar a sua experiência de jogo para o próximo nível. Aqui, você encontra tudo o que precisa para ser um verdadeiro konvict no mundo dos games!

                    Com esse texto, você passa uma mensagem clara sobre as opções de pagamento, a qualidade dos produtos, e a estética gamer que você deseja transmitir. Para reforçar ainda mais a identidade gamer da loja, você pode adicionar alguns detalhes visuais como fundo escuro, fontes futurísticas, e elementos gráficos relacionados a jogos ou tecnologia.
                    </p>
                </div>
                <div className='imgBox'>
                    <img className="angelImg" src={angelImg} alt="" />
                    <h1>Exemplo de produtos que fornecemos!</h1>
                    <img className='product1'src={product1} alt="" />
                    <img className='product2' src={product2} alt="" />
                    <img className='product3' src={product3} alt="" />
                </div>
                <BenefitsSection/>
            </div>
        </Container>
    )
}

