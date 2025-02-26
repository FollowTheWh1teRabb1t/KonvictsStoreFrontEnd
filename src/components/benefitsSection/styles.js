import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  color: #fff;
  background-color: #333;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  max-width: 90%;
  margin: 20px auto;
  text-align: center;

  .benefit {
    text-align: center;
    max-width: 200px;
    flex: 1;
  }

  .icon {
    font-size: 40px;
    color: red; 
    background: rgba(255, 0, 0, 0.1);
    padding: 15px;
    border-radius: 10px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .benefit {
      max-width: 100%;
    }

    .icon {
      font-size: 30px;
      padding: 10px;
    }

    p {
      font-size: 12px;
    }
  }
`;
