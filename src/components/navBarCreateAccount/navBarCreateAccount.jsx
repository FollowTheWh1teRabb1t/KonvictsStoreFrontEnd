import React from 'react';
import { Container } from './styles';
import homeImg from '../../assets/home.png'
import crown from '../../assets/crown.png'
import { useNavigate } from 'react-router-dom'

export default function NavBarCreateAccount() {


    const navigate = useNavigate();

    function handleHomePage() {
        navigate('/');
    }

    function handleLoginPage() {
        navigate('/login')
    }

    return (
        <Container>
            <a onClick={handleHomePage}><img src={homeImg} />Home</a>
            <a onClick={handleLoginPage} ><img src={crown}/>Login</a>
        </Container>
    )
}