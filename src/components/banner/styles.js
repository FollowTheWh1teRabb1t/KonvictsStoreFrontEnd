import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 80vh;
  overflow: hidden;
  width: 100%;

  .inputBox {
    width: 60%;
    max-width: 800px;
    position: absolute;
    bottom: 30%;
  }

  .buttonTitle {
    font-size: 14px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    color: red;
    text-align: center;
  }

  @media (max-width: 768px) {
    height: 60vh;
    

    .inputBox {
      width: 80%;
      bottom: 25%;
    }

    .buttonTitle {
      font-size: 10px;
      top: 12%;
    }
  }

  @media (max-width: 480px) {
    height: 50vh;

    .inputBox {
      width: 90%;
      bottom: 20%;
    }

    .buttonTitle {
      font-size: 10px;
      top: 15%;
    }
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease-in-out;
  z-index: -1;
`;

export const NavigationButtons = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 1;
  padding: 0 15px;

  button {
    background: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }

  @media (max-width: 768px) {

    button {
      padding: 8px;

     
    }


    
  }

  @media (max-width: 480px) {
    button {
      padding: 6px;
    }

  
  }
`;
         