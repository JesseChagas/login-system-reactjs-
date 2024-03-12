import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#201b2c, #2b134b);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSignup = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: entering 0.7s ease-in-out;

  h1 {
    font-size: 3vw;
    color: #ffffff;
  }

  img {
    width: 35vw;
  }
`;

export const RightSignup = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: entering 0.7s ease-in-out;
`;

export const CardSignup = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 35px;
  background: #2f2841;
  border-radius: 20px;
  box-shadow: 0px 10px 40px #00000056;

  h1 {
    color: #00ff88;
    font-weight: 800;
    margin: 0;
  }
`;

export const TextField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0px;

  input {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: #514869;
    color: #f0ffffde;
    font-size: 12pt;
    box-shadow: 0px 10px 40px #00000056;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      color: #f0ffff94;
    }
  }

  label {
    color: #f0ffffde;
    margin-bottom: 10px;
  }
`;

export const BtnSignup = styled.button`
  width: 100%;
  padding: 16px 0px;
  margin: 25px;
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
`;


export const LabelError = styled.label`
  font-size: 17px;
  color: red;
`;

export const LabelSignup = styled.label`
  font-size: 18px;
  max-width: 350px;
  color: #676767;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }

  a:hover {
    color: #00ff88; 
  }
`;