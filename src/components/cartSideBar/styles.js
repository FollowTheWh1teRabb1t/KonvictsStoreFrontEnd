import styled from 'styled-components';

export const SidebarContainer = styled.div`
    position: fixed;
    right: 2%;
    top: 22%;
    width: 400px;
    height: 550px;
    background: rgba(0, 0, 0, 0.5); 
    backdrop-filter: blur(10px);
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    overflow-y: auto;
    z-index: 1000;
    color: white;
    border-radius: 20px;
    font-family: 'Poppins', sans-serif;

    .increment, .decrement {
        border-radius: 15px;
        font-size: 15px;
        color: white;
        background-color: #333;
        padding: 5px;
    }
`;


export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: red;
    margin: 5px;
`;

export const CartItems = styled.div`
    margin-top: 20px;
`;

export const CartItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    border: 1px solid white;
    border-radius: 20px;
    padding: 10px;
    

    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 100%;
        margin-right: 10px;
    }

    div {
        flex: 1;
    }
`;

export const TotalAmount = styled.div`
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid white;
    padding: 8px;
    border-radius: 20px;
    margin-bottom: 10px;
`;

export const CheckoutButton = styled.button`
        font-size: 10px;
        background: rgba(255, 255, 255, 0.1);
        color: ${({ color }) => color || 'white'}; 
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 20px 20px;
        cursor: pointer;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px); 
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); 
        transition: background-color 0.3s ease, color 0.3s ease;
        font-family: "Press Start 2P", cursive;

    &:hover {
        background-color: black;
    }
`;
