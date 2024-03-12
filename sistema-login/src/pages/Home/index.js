import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import useAuth from '../../hooks/useAuth'
import * as C from "./styles"

const Home = () => {
    const {signout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
      signout();
      navigate("/");
    };


    return (
      <C.Container>
        <C.Title>Home / Todo List</C.Title>
        <Button Text="Sair" onClick={handleLogout}>
          Sair
        </Button>
      </C.Container>
    )
}

export default Home