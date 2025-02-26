import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #1b1b1b;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  padding: 20px;

  img {
    width: 50px;
  }

  .footer-container {
    display: flex;
    flex-wrap: wrap; /* Permite ajustar os itens para telas menores */
    justify-content: space-between;
    gap: 20px;
    padding: 20px 0;
  }

  .footer-section {
    flex: 1 1 200px; /* Define largura mínima e máxima para cada seção */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    background-color: #2b2b2b;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    h4 {
      margin-bottom: 15px;
      font-size: 1.2rem;
      text-transform: uppercase;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 10px;
        font-size: 0.9rem;

        &:hover {
          color: #f0a500; /* Cor de destaque ao passar o mouse */
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    font-size: 0.8rem;
    padding: 10px;
    border-top: 1px solid #333;
    margin-top: 20px;

    p {
      margin: 5px 0;
    }
  }
`;
