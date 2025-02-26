import styled from 'styled-components';
import criarContaBanner from '../../../src/assets/criarContaBanner.jpg';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: row;
    background-color: black;

    .boxImg {
        width: 1200px;
        height: 100vh;
        background-image: url(${criarContaBanner});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 70px;
    }

    .boxInputs {
        padding: 30px;
        width: 1000px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .boxNome, .boxEmail, .boxPassword {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    button {
        font-size: 8px;
        background: rgba(255, 255, 255, 0.1);
        color: ${({ color }) => color || 'white'}; 
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 20px 20px;
        margin-right: 20px;
        cursor: pointer;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px); 
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); 
        transition: background-color 0.3s ease, color 0.3s ease;
        font-family: "Press Start 2P", cursive;

        &:hover {
            background: ${({ hoverBackground }) => hoverBackground || 'rgba(255, 255, 255, 0.5)'};
            color: ${({ hoverColor }) => hoverColor || 'black'};
        }
    }

    /* 📱 Responsividade */
    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .boxImg {
            width: 100%;
            height: 400px;
            border-radius: 30px;
        }

        .boxInputs {
            width: 100%;
            padding: 20px;
        }
    }

    @media (max-width: 768px) {
        .boxImg {
            height: 300px;
        }

        .boxInputs {
            width: 90%;
            padding: 15px;
        }

        button {
            padding: 15px;
            font-size: 10px;
        }
    }

    @media (max-width: 480px) {
        .boxImg {
            height: 250px;
        }

        .boxInputs {
            width: 100%;
            padding: 10px;
        }

        .boxNome, .boxEmail, .boxPassword {
            flex-direction: column;
            align-items: center;
        }

        button {
            padding: 10px;
            font-size: 12px;
        }
    }
`;
