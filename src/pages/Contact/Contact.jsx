import React from 'react';
import { Container } from './styles'
import Header from '../../components/header/header'
import profileImg from '../../assets/profileImg.png'
import { FaCheckCircle, FaLinkedin, FaWhatsapp, FaGoogle} from 'react-icons/fa';
import maguinIcon from '../../assets/maguinIcon.png';
import controllerIcon from '../../assets/controllerIcon.png';
import controllerIcon2 from '../../assets/controllerIcon2.png';
import iconDragon from '../../assets/iconDragon.png';


export default function Contact() {
    return (

        <Container>
             <Header />
            <section>
            <div className='boxPresentation'>
                <img className='mageIcon' src={maguinIcon} alt="Mage Icon" />
                <div className='roundProfile'>
                    <img className='profileImage' src={profileImg} alt="profileImage" />
                    <FaCheckCircle className='verified' color='green' size={20}/>
                </div>
                <div className='boxDescription'>
                    <img className='controllerIcon2' src={controllerIcon2} alt="Icon Controller" />
                    <p>Bem-vindo à Konvicts Store!
                    Olá, meu nome é Felipe José de Lima e sou o fundador da Konvicts Store, um marketplace dedicado a oferecer produtos exclusivos e de qualidade, focado em um público jovem e antenado nas últimas tendências. Nossa missão é proporcionar uma experiência de compra única, com uma navegação simples, rápida e segura.
                    A Konvicts Store é um projeto de treinamento que desenvolvi como parte do meu portfólio, utilizando tecnologias modernas como React, Node.js e SQLite, com o objetivo de aprimorar minhas habilidades de programação e design. Embora a loja ainda não seja funcional em termos de compras reais, ela oferece uma visão completa do que seria uma plataforma de e-commerce, com funcionalidades como filtragem de produtos, busca por categorias e uma interface amigável para o usuário.
                    Este projeto reflete meu esforço contínuo em aprender e aplicar boas práticas de desenvolvimento web, e estou empolgado em compartilhar com vocês o resultado de todo esse aprendizado!</p>
                </div>
                   <div className='boxContact' style={{ display: 'flex', justifyContent: 'space-around', fontSize: '30px' }}>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={50} style={{ color: '#0A66C2' }} />
                        </a>
                        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={50} style={{ color: '#25D366' }} />
                        </a>
                        <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaGoogle size={50} style={{ color: '#DB4437' }} />
                        </a>
                   </div>   
            </div>
            <div className='boxDescriptionStore'>
                <img className='iconDragon' src={iconDragon} alt="Icon Dragon" />
                <h1 style={{color: 'red'}}>Sobre a Loja</h1>
                <p>
Na Konvicts Store, nosso objetivo é conectar você às melhores experiências em tecnologia e entretenimento. Somos uma loja online que acredita na união entre qualidade e inovação, trazendo produtos que atendem a todos os gostos e necessidades.

Nossa missão é oferecer uma plataforma simples, acessível e segura para que você explore uma ampla seleção de produtos. De notebooks e periféricos a consoles e games, a Konvicts Store é o lugar perfeito para encontrar o que você procura.

Embora este projeto seja uma simulação para treinar e demonstrar habilidades em desenvolvimento web, nossa dedicação a cada detalhe foi pensada para refletir um ambiente de e-commerce real. Queremos proporcionar uma navegação fluida, responsiva e repleta de funcionalidades, como pesquisa, filtragem de categorias e um sistema de carrinho intuitivo.</p>
<img className='controllerIcon' src={controllerIcon} alt="Controller Icon" />
            </div>
            </section>
        </Container>
    )
}