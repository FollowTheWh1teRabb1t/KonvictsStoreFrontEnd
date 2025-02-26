import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 50%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #333;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: white;

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
    color: red;
  }

  p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    background-color: #222;
    color: white;
  }

  .row {
    display: flex;
    gap: 10px;
  }

  .row input {
    flex: 1;
  }

  button {
    background: red;
    color: white;
    padding: 10px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      background: darkred;
    }
  }

  .gamer, 
  .mouse {
    width: 80px;
    position: absolute;
  }

  .gamer {
    left: 23%;
    top: 22%;
  }

  .mouse {
    left: 72%;
    top: 70%;
  }

  a {
    color: red;
    text-decoration: none;
    font-weight: bold;
  }

  /* 🌍 Responsividade */
  @media (max-width: 768px) {
    .gamer, 
    .mouse {
      display: none;
    }

    .row {
      flex-direction: column;
    }

    width: 90%;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }

    input,
    textarea {
      font-size: 12px;
    }

    button {
      font-size: 14px;
    }
  }
`;
