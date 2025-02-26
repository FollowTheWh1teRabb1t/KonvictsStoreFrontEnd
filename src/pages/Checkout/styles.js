import styled from 'styled-components';
import backgroundCheckout from '../../assets/backgroundCheckout.jpg';

export const Container = styled.div`
  .boxApp {
    display: flex;
    align-items: center;
    padding: 20px;
    background-size: cover;
    gap: 100px;
  }

  .menuPayment { 
    position: relative;
    width: 100%;
    max-width: 800px;
    color: white;
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: #333;
    border-radius: 20px;
    padding: 20px;
    flex-direction: column;
  }

  .cartSection {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-height: 60vh;
    overflow-y: auto;
  }

  .itemBox {
    display: flex;
    gap: 20px;
    padding: 10px;
    background-color: #444;
    border-radius: 10px;
  }

  .itemDescription {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 10px;
    gap: 20px;
  }

  img {
    border-radius: 100%;
    max-width: 150px;
  }

  .delete {
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 100%, rgba(0,212,255,1) 100%);
    padding: 10px;
    border-radius: 15px;
    width: 100%;
    max-width: 400px;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  h3 {
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 100%, rgba(0,212,255,1) 100%);
    border-radius: 15px;
    padding: 10px;
    width: 100%;
    max-width: 400px;
  }

  .priceIcon {
    width: 20px;
    margin-left: 10px;
  }

  .paymentSection {
    position: relative;
    width: 90%;
    max-width: 500px;
    color: #fff;
    background-color: #333;
    border-radius: 15px;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  .qrCode {
    margin-top: 10px;
    margin-left: 60px;
  }

  button {
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 100%, rgba(0,212,255,1) 100%);
    color: #fff;
    font-family: 'Poppins', sans-serif;
    width: 150px;
    height: 50px;
    font-size: 16px;
    border-radius: 15px;
    margin: 10px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  .geforceIcon,
  .scarIcon {
    width: 65px;
  }

  @media (max-width: 768px) {

    .boxApp {
      display: flex;
      flex-direction: column;
    }

    .menuPayment, .paymentSection {
      width: 100%;

      padding: 15px;
    }


    .delete, h3 {
      max-width: 100%;
    }

    .geforceIcon,
    .scarIcon {
      display: none;
    }
  }
`;
