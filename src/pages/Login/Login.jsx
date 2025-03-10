import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from '../../context/authContext';
import { Container } from './styles';
import NavBarLogin from '../../components/navBarLogin/navBarLogin.jsx';
import InputData from '../../components/input/input';
import Button from '../../components/button/button.jsx';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            setErrorMessage("Email e senha são obrigatórios.");
            return;
        }
        setErrorMessage(""); // Limpar mensagem de erro

        try {
            setLoading(true);  // Iniciar carregamento
            // Enviar dados para o backend
            const response = await axios.post('https://konvictsstorebackend.onrender.com/auth/login', {
                email,
                password,
            });
            // Armazenar o token JWT retornado pelo backend
            const { token } = response.data;
            localStorage.setItem('authToken', token);  // Armazenar o token
            login(token); // Chamar função de login do contexto
            navigate('/'); // Redirecionar após o login
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setErrorMessage("Erro ao fazer login, verifique suas credenciais.");
        } finally {
            setLoading(false); // Finalizar carregamento
        }
    };

    return (
        <Container>
            <NavBarLogin />
            <div className='boxImg'></div>
            <div className='boxInputs'>
                <div className='boxEmail'>
                    <FaEnvelope color={'red'} size={40} />
                    <InputData
                        onChange={(e) => setEmail(e.target.value)}
                        type='text'
                        placeholder={'Digite seu e-mail'}
                    />
                </div>
                <div className='boxPassword'>
                    <FaLock color={'red'} size={40} />
                    <InputData
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder={'Digite sua senha'}
                    />  
                </div>
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <button onClick={handleLogin} disabled={loading}>
                {loading ? 'Carregando...' : 'Entrar'}
            </button>
        </Container>
    );
}
