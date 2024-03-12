import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px 1px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
  height: 50%;
`;

export const Label = styled.label`
  font-size: 25px;
  font-weight: 600;
  color: #676767;
  font-family: 'Arial', 'Helvetica', sans-serif;
`;

export const LabelSignup = styled.label`
  font-size: 18px;
  max-width: 350px;
  color: #676767;
`;

export const LabelError = styled.label`
  font-size: 17px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }

  a:hover {
    color: #046ee5; /* Cor alterada no hover */
  }
`;
