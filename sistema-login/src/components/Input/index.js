import React from 'react'
import * as C from "./styles";

const Input = ({type, placeholder, valve, onChange}) => {
  return (
    <C.Input
      valve = {valve}
      onChange = {onChange}
      type = {type}
      placeholder = {placeholder}
    />
  );    
};

export default Input