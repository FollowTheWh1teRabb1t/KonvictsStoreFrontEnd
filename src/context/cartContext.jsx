import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Adicionar um item ao carrinho
    const addItemToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex(i => i.productId === item.productId);

            if (existingItemIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += item.quantity;
                return updatedItems;
            } else {
                return [...prevItems, item];
            }
        });
    };

    // Atualizar quantidade do item no carrinho
    const updateItemQuantity = (productId, newQuantity) => {
        setCartItems((prevItems) => 
            prevItems.map((item) => 
                item.productId === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
            )
        );
    };

    // Remover item do carrinho
    const removeItemFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.productId !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, updateItemQuantity, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
