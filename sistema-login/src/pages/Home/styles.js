// style.js

import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#201b2c, #2b134b);
  display: flex;
  justify-content: center;
  align-items: flex-start; 
`;

export const Title = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  flex-direction: column;
  padding: 20px; 
  animation: entering 0.7s ease-in-out;

  h1 {
    font-size: 3vw;
    color: #ffffff;
    margin-bottom: 20px;
  }

`;

export const BtnLogout = styled.button`
  width: 15vh; 
  padding: 16px 0px;
  border: none;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 3px;
  color: #2b134b;
  background: #00ff88;
  cursor: pointer;
  box-shadow: 0px 10px 40px -12px #00ff8052;
  margin-top: 30px;
  margin-right: 20px;
`;