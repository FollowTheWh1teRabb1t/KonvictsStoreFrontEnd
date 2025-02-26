import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;

    .cardArea {
        display: flex;
        gap: 20px;
        padding: 80px 20px;
    }

    .carregando {
        background-color: black;
    }

    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        color: #fff;
        padding: 20px;
        gap: 20px;
        font-family: 'Poppins';
         
        > button {
            position: absolute;
            font-family: 'Poppins';
            border: 1px solid;
            border-radius: 20px;
            padding: 5px;
            color: #fff;
            background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 100%, rgba(0,212,255,1) 100%);
        }

        > .next {
            top: 180%;
            left: 95%;
        }

        > .back {
            top: 180%;
            right: 95%; 
        }

        @media(max-width: 768px) {
            .next {
                top: 176%;
                left: 80%;
            }
            
            .back {
                top: 176%;
                right: 80%; 
            }
        }

        @media (max-width: 480px) {
        .cardArea {
            padding: 20px 5px;
        }

        .pagination {
            gap: 10px;
            text-align: center;

            > button {
                width: 100%;
                padding: 12px;
            }
        }
    }
    }
`