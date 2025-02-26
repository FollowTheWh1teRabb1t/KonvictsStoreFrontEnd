import styled from 'styled-components';



export const Container = styled.div`
    width: 280px;
    padding: 20px;
    border: 1px solid;
    border-radius: 20px;
    margin: 10px;
    background-color: white;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    gap: 20px;
    font-family: "Poppins", sans-serif;
    transition: transform 0.3s ease;


    &:hover {
        transform: scale(1.05);
    }

     > img {
        max-width: 70%;
        transition: transform 0.3s ease;
     }
     > h3 {
        font-size: 15px;
        min-height: 60px;
        margin-bottom: 10px;
     }

    > p {
        font-size: 15px;
        font-weight: bold;
        border: 1px solid black;
        margin-top: auto;
        border-radius: 15px;
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 100%, rgba(0,212,255,1) 100%);
        color: white;
        padding: 5px;
        box-shadow: 0 4px 2px rgba(0,0,0,1);
    }

    a {
        font-size: 15px;
        font-weight: bold;
        border: 1px solid black;
        margin-top: auto;
        border-radius: 15px;
        padding: 20px;
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 100%, rgba(0,212,255,1) 100%);
        color: white;
        padding: 5px;
        box-shadow: 0 4px 2px rgba(0,0,0,1);
        cursor: pointer;
        text-decoration: none;
        
    }

    button {
        font-size: 15px;
        font-weight: bold;
        border: 1px solid black;
        margin-top: auto;
        border-radius: 15px;
        padding: 20px;
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 100%, rgba(0,212,255,1) 100%);
        color: white;
        padding: 5px;
        box-shadow: 0 4px 2px rgba(0,0,0,1);
        cursor: pointer;
        text-decoration: none;
    }

    a:hover, button:hover {
        transform: scale(1.05   )
    }

    .iconPrice {
        width: 20px;
    }

`
