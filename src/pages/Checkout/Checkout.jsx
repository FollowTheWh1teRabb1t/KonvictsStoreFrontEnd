import React, { useState } from 'react';
import { Container } from './styles';
import Header from '../../components/header/header';
import { useCart } from '../../context/cartContext';
import { QRCodeCanvas } from 'qrcode.react';
import priceIcon from '../../assets/priceIcon.png';
import { PixLogo, CreditCard } from '../node_modules/@phosphor-icons/react';
import scarIcon from '../../assets/scarIcon.png';
import geforceIcon from '../../assets/geforceIcon.png';
import megaIcon from '../../assets/megaIcon.png';

export default function Checkout() {
    const { cartItems, removeItemFromCart, clearCart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('');
    const qrValue = "https://seulinkounfo.com";

    // Calcula o valor total corretamente por item
    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleFinalizePayment = (event) => {
        event.preventDefault();
        if (!paymentMethod) {
            alert("Por favor, selecione um método de pagamento.");
            return;
        }

        alert(`Pagamento realizado com sucesso via ${paymentMethod.toUpperCase()}!`);
        clearCart(); // Limpa o carrinho após finalizar
    };

    return (
        <Container>
              <Header />
            <div className='boxApp'>

            <div className="menuPayment">
                <div className="cartSection">
                    <h2>Meu pedido</h2>
                    <div className="boxCart">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item.id} className="itemBox">
                                    <div className='boxImg'>
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className='itemDescription'>
                                        <p>{item.quantity}x {item.title}</p>
                                        <h3>R$ {(item.price * item.quantity).toFixed(2)} 
                                            <img src={priceIcon} className='priceIcon' alt="Ícone de preço" />
                                        </h3>  
                                        <p className="delete" onClick={() => removeItemFromCart(item.productId)}>Excluir</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Carrinho vazio</p>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="paymentSection">
                <img className='geforceIcon' src={geforceIcon} alt="Ícone Geforce" />
                <h2>Formas de pagamento</h2>
                <div className="boxPayment">
                    <div className='boxPaymentOption'>
                        <button onClick={() => setPaymentMethod('pix')}>
                            PIX <PixLogo size={20} weight="fill" />
                        </button>
                        <button onClick={() => setPaymentMethod('credit')}>
                            Cartão <CreditCard size={20} weight="fill" />
                        </button>   
                    </div>

                    {paymentMethod === 'pix' && <QRCodeCanvas value={qrValue} className='qrCode' size={210} />}
                    {paymentMethod === 'credit' && (
                        <form onSubmit={handleFinalizePayment}>
                            <input type="text" placeholder="Número do Cartão" required />
                            <input type="text" placeholder="Nome no Cartão" required />
                            <input type="text" placeholder="MM/AA" required />
                            <input type="text" placeholder="CVV" required />
                        </form>
                    )}
                </div>

                {paymentMethod && (
                    <button className="finalizeButton" onClick={handleFinalizePayment}>
                        Finalizar Pedido
                    </button>
                )}

                <img className='scarIcon' src={scarIcon} alt="Ícone Scar" />
            </div>
            </div>
        </Container>
    );
}
