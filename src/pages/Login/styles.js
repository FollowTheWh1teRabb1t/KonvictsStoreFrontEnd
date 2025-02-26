import styled from 'styled-components';
import bannerLogin from '../../../src/assets/bannerLogin.jpg';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: row;
    background-color: black;
    padding: 20px;

    .boxImg {
        width: 50%;
        height: 100vh;
        background-image: url(${bannerLogin});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 40px;
    }

    .boxInputs {
        padding: 30px;
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .boxEmail, .boxPassword {
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
    }

    button {
        font-size: 12px;
        background: rgba(255, 255, 255, 0.1);
        color: ${({ color }) => color || 'white'}; 
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 15px 20px;
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
        .boxImg {
            width: 40%;
            height: 80vh;
            border-radius: 30px;
        }
        .boxInputs {
            width: 60%;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        height: auto;
        padding: 40px 20px;

        .boxImg {
            width: 100%;
            height: 300px;
            border-radius: 20px;
        }

        .boxInputs {
            width: 100%;
            padding: 20px;
            align-items: center;
        }

        .boxEmail, .boxPassword {
            flex-direction: column;
            width: 100%;
        }

        button {
            width: 100%;
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        .boxImg {
            height: 200px;
        }

        .boxInputs {
            padding: 15px;
            gap: 15px;
        }

        button {
            font-size: 12px;
            padding: 12px;
        }
    }
`;
