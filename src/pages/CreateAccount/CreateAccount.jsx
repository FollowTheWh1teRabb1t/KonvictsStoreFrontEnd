import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import Button from '../../components/button/button';
import InputData from '../../components/input/input';
import NavBarCreateAccount from '../../components/navBarCreateAccount/navBarCreateAccount';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useAuth }  from '../../context/authContext'; // Importa useAuth

export default function CreateAccount() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth(); // Usa o hook useAuth
    const navigate = useNavigate();

    const handleRegister = async () => {
        if(!userName || !email || !password) {
            console.error('Todos os campos são obrigatórios!');
            return;
        }
        console.log('Tentando registrar...');
        console.log('Dados enviados:', { userName, email, password });
        try {
            const response = await axios.post('http://localhost:5001/auth/register', {
                userName,
                email,
                password
            });
            console.log('Usuário criado com sucesso:', response.data);
            alert('Conta criada com sucesso!');

            login({userName, email});
            navigate('/');
        } catch (error) {
            console.error('Erro ao criar usuário', error);
            alert('Alguma coisa deu errado :/');
        }
    };

    return (
        <Container>
            <NavBarCreateAccount />
            <div className='boxInputs'>
                <div className='boxNome'>
                    <FaUser color={'red'} size={40} />
                    <InputData 
                        placeholder={'Nome de usuário'}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className='boxEmail'>
                    <FaEnvelope color={'red'} size={40}/>
                    <InputData 
                        placeholder={'Email'}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='boxPassword'>
                    <FaLock color={'red'} size={40}/>
                    <InputData 
                        type='password'
                        placeholder={'Senha'}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleRegister} disabled={!userName || !email || !password}>
                    Finalizar
                </button>
            </div>
            <div className='boxImg'></div>
        </Container>
    );
}
