import styled from 'styled-components';
import backgroundContato from '../../assets/backgroundContato.jpg';

export const Container = styled.div`
    section {
        min-height: 100vh;
        background-image: url(${backgroundContato});
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 20px;
        gap: 20px;
    }

    .mageIcon {
        width: 80px;
        position: absolute;
        top: 105%;
        right: 77%;
    }

    .controllerIcon {
        position: absolute;
        left: 80%;
        top: 90%;
        transform: translateX(-50%);
        max-width: 100px;
    }

    .iconDragon {
        width: 64px;
        position: absolute;
        left: 47%;
        top: 22%;
    }

    .controllerIcon2 {
        width: 64px;
        position: absolute;
        top: 38%;
        left: 49%;
    }

    .boxPresentation {
        width: 90%;
        max-width: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        color: red;
        font-family: 'Poppins', sans-serif;
        background-color: #454545;
        border-radius: 40px;
        padding: 20px;
        text-align: center;
    }

    .boxDescription {
        text-shadow: 0 0 1px red, 0 0 10px red, 0 0 20px red, 0 1px 0 red;
        padding: 10px;
        font-size: 14px;
    }

    .roundProfile {
        position: relative;
        width: 100px;
        height: 100px;
        border: 1px solid black;
        border-radius: 100%;

        > .profileImage {
            width: 100px;
            height: 100px;
            border-radius: 100%;
        }

        > .verified {
            position: absolute;
            bottom: 5px;
            right: 5px;
        }
    }

    .boxContact {
        width: 100%;
        max-width: 300px;
        display: flex;
        justify-content: center;
        gap: 20px;
        background-color: #454545;
        border-radius: 50px;
        padding: 20px;
        margin-top: 20px;
    }

    .boxDescriptionStore {
        width: 90%;
        max-width: 500px;
        text-align: center;
        font-family: 'Poppins';
        background-color: #454545;
        padding: 20px;
        border-radius: 20px;
        color: white;
        margin-top: 20px;
    }

    h1 {
        color: red;
    }

    @media (max-width: 768px) {
        .boxPresentation,
        .boxDescriptionStore {
            width: 100%;
            max-width: 90%;
        }

        .controllerIcon2, .iconDragon ,.mageIcon, .controllerIcon {
            display: none;
        }


    }
`;
