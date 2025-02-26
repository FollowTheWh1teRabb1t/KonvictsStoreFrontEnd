import styled from 'styled-components';

export const Container = styled.div`
    .contentEnvelope {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
        padding: 20px;
    }

    .descriptionBox {
        position: relative;
        width: 90%;
        max-width: 500px;
        height: auto;
        color: #fff;
        margin: 20px auto;
        border-radius: 15px;
        background-color: #333;
        padding: 20px;
        font-size: 16px;
        overflow-y: auto;

        span {
            color: red;
            font-weight: bold;
        }

        @media (max-width: 768px) {
            width: 100%;
            height: auto;
        }
    }

    .imgBox {
        position: relative;
        width: 90%;
        max-width: 840px;
        border-radius: 15px;
        background-color: #333;
        padding: 20px;
        text-align: center;
        margin: 20px auto;

        h1 {
            color: red;
        }

        .product1, .product2, .product3 {
            border-radius: 100%;
            width: 100%;
            max-width: 250px;
            margin: 10px;
        }

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .marioImg, .arcadeImg, .angelImg {
        display: none;

    }

`;
