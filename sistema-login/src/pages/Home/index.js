import React from 'react'
import { useNavigate } from 'react-router-dom'
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
        <C.Title>
                <h1>HOME - TODO LIST</h1>
            </C.Title>
          <C.BtnLogout onClick={handleLogout}>Sair</C.BtnLogout>
      </C.Container>
    )
}

export default Home