import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarContainer, CloseButton, CartItems, CartItem, TotalAmount, CheckoutButton } from './styles';
import { useAuth } from '../../context/authContext';
import { useCart } from '../../context/cartContext';

export default function CartSidebar({ isOpen, onClose }) { 
    const navigate = useNavigate();
    const { user } = useAuth();
    const { cartItems, removeItemFromCart, updateItemQuantity } = useCart();

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setTotalAmount(total);
    }, [cartItems]);

    if (!isOpen) return null;

    const handleCheckout = () => {
        if (!user) {
            navigate('/login');
        } else {
            navigate('/checkout');
        }
    };

    return (
        <SidebarContainer>
            <CloseButton onClick={onClose}>×</CloseButton>
            <h2>Carrinho de Compras</h2>
            <CartItems>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id}>
                            <img src={item.img} alt={item.title} />
                            <div>
                                <p>{item.title}</p>
                                <p>Preço: R${item.price.toFixed(2)}</p>
                                <p>Quantidade: {item.quantity}</p>
                            </div>
                            <div>
                                <button className="increment" onClick={() => updateItemQuantity(item.productId, item.quantity + 1)}>+</button>
                                <button className="decrement" onClick={() => updateItemQuantity(item.productId, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                                <CloseButton onClick={() => removeItemFromCart(item.productId)}>x</CloseButton>
                            </div>
                        </CartItem>
                    ))
                ) : (
                    <p>Carrinho vazio</p>
                )}
            </CartItems>
            <TotalAmount>Total: R${totalAmount.toFixed(2)}</TotalAmount>
            <CheckoutButton onClick={handleCheckout}>Finalizar Compra</CheckoutButton>
        </SidebarContainer>
    );
}
    