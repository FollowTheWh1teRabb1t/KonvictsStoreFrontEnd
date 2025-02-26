import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: ${({ color }) => color || 'black'}; 
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 20px 20px;
  margin-right: 20px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); 
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); 
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: "Press Start 2P", cursive;

  &:hover {
    background: ${({ hoverBackground }) => hoverBackground || 'rgba(255, 255, 255, 0.5)'};
    color: ${({ hoverColor }) => hoverColor || 'black'};
  }
  
  .iconImg {
    width: 50px;
  }
`;
