import React from 'react';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import { FaCartPlus, FaInfoCircle } from 'react-icons/fa';
import priceImg from '../../assets/priceIcon.png';
import { useCart } from '../../context/cartContext';

export default function Card({ title, price, img, productId }) {
    const navigate = useNavigate();
    const { cartItems, addItemToCart } = useCart(); // Use the cart context

    const handleClick = () => {
        if (productId) {
            navigate(`/product/${productId}`);
        } else {
            console.error('Product ID is undefined');
        }
    };

    const handleAddToCart = () => {
        // Check if the item is already in the cart
        const existingItem = cartItems.find(item => item.productId === productId);

        if (existingItem) {
            // If the item already exists, increment its quantity
            addItemToCart({
                ...existingItem, // Preserve the existing item properties
                quantity: existingItem.quantity + 1, // Increment the quantity
            });
            console.log('Item quantity incremented');
        } else {
            // Add new item to the cart
            addItemToCart({ title, price, img, productId, quantity: 1 });
            console.log('Item added to cart');
        }
    };

    return (
        <Container>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>
                Preço: R${price}{' '}
                <img className="iconPrice" src={priceImg} alt="Ícone de preço" />
            </p>

            <button onClick={handleAddToCart}>
                Adicionar ao Carrinho <FaCartPlus size={20} />
            </button>
        </Container>
    );
}
