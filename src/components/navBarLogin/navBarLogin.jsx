import React from 'react';
import { Container } from './styles.js';
import Games from '../../assets/games.png'
import homeImg from '../../assets/home.png'
import life from '../../assets/life.png'
import { useNavigate } from 'react-router-dom'

export default function NavBarLogin() {

    const navigate = useNavigate();

    function handleHomeClick() {
        navigate('/')
    }

    function handleCreateAccountClick() {
        navigate('/create')
    }
    return (
        <Container>
            <img src={Games} alt='control'/> 
            <div className='boxLinks'>
                <a onClick={handleHomeClick}><img className='iconHouse' src={homeImg}/>Home</a>
                <a onClick={handleCreateAccountClick}><img className='iconLife' src={life}/>Criar Conta</a>
            </div>
        </Container>
    )
}