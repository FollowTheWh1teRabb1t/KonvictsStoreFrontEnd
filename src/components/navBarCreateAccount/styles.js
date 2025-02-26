import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: 0;
    left: 22%;
    transform: translateX(-50%);
    width: 800px;
    height: 100px;
    color: white;
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 100%, rgba(0,212,255,1) 100%);
    border-radius: 30px;
    padding: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;
    font-family: "Press Start 2P", cursive;

    > a {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        text-decoration: none;
        color: white;

        &:hover {
            transform: scale(1.1);
        }
    }

    > a img {
        width: 80px;
    }

    /* 📱 Responsividade */
    @media (max-width: 1024px) {
        width: 90%;
        height: 80px;
        position: absolute;
        left: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 70px;
        border-radius: 0;
        justify-content: space-between;
        padding: 0 20px;
        
        > a img {
            width: 60px;
        }

        > a {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        height: 60px;
        padding: 0 15px;

        > a img {
            width: 50px;
        }

        > a {
            font-size: 12px;
        }
    }
`;
