import React, { useState } from 'react';
import { Container } from './styles';
import iconeStore from '../../assets/iconeStore.png';
import { FaShoppingCart } from 'react-icons/fa';
import iconeSword from '../../assets/sword.png';
import { useNavigate } from 'react-router-dom';
import Profile from '../profile/profile';
import { useAuth } from '../../context/authContext';
import { useCart } from '../../context/cartContext';
import CartSidebar from '../cartSideBar/cartSidebar';

export default function Header() {
    const navigate = useNavigate();
    const { user, logout } = useAuth(); 
    const { cartItems } = useCart(); // Pegando os itens do carrinho do contexto
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartToggle = () => {
        setIsCartOpen((prev) => !prev); // Alternar entre abrir e fechar o carrinho
    };

    return (
        <Container>
            {user && <Profile />} 
            <div className='boxIcon'>
                <img className='mainIcon' src={iconeStore} alt='Store Icon' />
                <h1>Konvicts Gamer Store! <img className='sword' src={iconeSword} alt='sword' /></h1>
            </div>
            <div className='boxOptions'>
                <small onClick={() => navigate('/')}>Home</small>
                <small onClick={() => navigate('/contact')}>Contato</small>
                <small onClick={() => navigate('/info')}>Informações</small>
                <small onClick={() => navigate('/central')}>Central de atendimento</small>
            </div>
            <div className='boxButtons'>
                {!user && <a onClick={() => navigate('/login')}>Login</a>} 
                {!user && <a onClick={() => navigate('/create')}>Crie Sua Conta</a>} 
                
                {user && <a onClick={() => { logout(); navigate('/'); }}>Logout</a>}
                {user && (
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <FaShoppingCart size={40} style={{ cursor: 'pointer' }} onClick={handleCartToggle} />
                        {cartItems.length > 0 && (
                            <span 
                                style={{
                                    position: 'absolute',
                                    top: -5,
                                    right: -5,
                                    backgroundColor: 'red',
                                    color: 'white',
                                    fontSize: '12px',
                                    borderRadius: '50%',
                                    padding: '4px 8px',
                                }}
                            >
                                {cartItems.length}
                            </span>
                        )}
                    </div>
                )}
            </div>

            {/* Exibir o carrinho se estiver aberto */}
            <CartSidebar isOpen={isCartOpen} onClose={handleCartToggle} />
        </Container>
    );
}
