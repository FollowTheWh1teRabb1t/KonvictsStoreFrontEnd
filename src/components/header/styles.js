import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    width: 100%;
    background: #454545;
    padding: 60px;
    font-family: "Press Start 2P", cursive;

    > .boxButtons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 20px;
        margin-right: 100px;
        font-size: 15px;
        color: #fff;
        
        > a  {
            border: 2px solid white;
            padding: 10px;
            border-radius: 10px;
            cursor: pointer;
        }

        > a:hover {
            background-color: black;
        }
    }

    > .boxIcon {
        position: relative;
        top: 1%;
        display: flex;
        align-items: center;
        justify-content: center; /* Centralizar o conteúdo */
        gap: 10px;
        padding: 60px;

        > h1 {
            color: red;
            font-size: 25px;
            padding: 20px;
            display: flex;
            align-items: center; /* Alinha verticalmente com a espada */
            gap: 10px;

            .sword {
                width: 50px; /* Reduzi um pouco o tamanho */
            }
        }

        > .mainIcon {
            width: 100px;
        }
    }

    > .boxOptions {
        position: absolute;
        top: 15%;
        left: 18%;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        font-family: 'Poppins';
        color: #fff;
        cursor: pointer;
    }

    > .boxOptions > small {
        transition: transform 0.3s ease, color 0.3s ease;
    }

    > .boxOptions > small:hover {
        transform: translateY(-5px);
        color: #ff4500;
    }

    /* Responsividade para telas menores */
    @media (max-width: 768px) {
        padding: 20px;
        height: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .boxIcon {
            padding: 20px;
            text-align: center;
            gap: 10px;
            width: 100%;
            justify-content: center;

            > h1 {
                font-size: 20px;
                padding: 10px;
                gap: 5px;
            }

            .sword {
                width: 30px; /* Espada menor */
            }
        }

        .boxButtons {
            margin-right: 0;
            margin-top: 20px;
            font-size: 14px;
            gap: 15px;
            width: 100%;
            justify-content: center;

            > a {
                padding: 8px;
            }
        }

        .boxOptions {
            position: static;
            top: 0;
            left: 0;
            gap: 15px;
            font-size: 14px;
            margin-bottom: 20px;
            width: 100%;
            justify-content: center;
        }
    }

    @media (max-width: 480px) {


        .boxButtons {
            gap: 10px;
            font-size: 12px;
            width: 100%;
            justify-content: center;

            > a {
                padding: 6px;
            }
        }

        .boxIcon {
            flex-direction: column;
            padding: 10px;

            > h1 {
                font-size: 18px;
            }

            .sword {
                width: 25px; /* Espada ainda menor */
            }

            > .mainIcon {
                width: 80px;
            }
        }
    }
`;
