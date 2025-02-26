import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    max-width: 700px;
    height: 80px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid black;
    border-radius: 20px;
    background-color: black;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
    z-index: 10;

    > .icon {
        color: red;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.2);
        }
    }

    @media (max-width: 768px) {
        width: 90%;
        height: 70px;

        > .icon {
            font-size: 40px;
        }
    }

    @media (max-width: 480px) {
        width: 95%;
        height: 60px;

        > .icon {
            font-size: 30px;
        }
    }
`;
