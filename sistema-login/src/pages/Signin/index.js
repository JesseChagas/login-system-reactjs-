import React, {useState} from 'react'
import Input from '../../components/Input';
import Button from '../../components/button';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import * as C from "./styles"

const Signin = () => {
    const {signin} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Prencha todos os campos")
            return;
        }
    

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    };   
    

  return (
    <C.Container>
        <C.Label>SISTEMA DE LOGIN</C.Label>
        <C.Content>
            <Input
                type = "email"
                placeholder = "Digite seu E-mail"
                value = {email}
                onChange= {(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input
                type = "password"
                placeholder = "Digite sua senha"
                value = {senha}
                onChange= {(e) => [setSenha(e.target.value), setError("")]}
            />
            <C.LabelError>{error}</C.LabelError>
            <Button Text="Entrar" onClick={handleLogin} />
            <C.LabelSignup>
                Não tem uma conta?
                <C.Strong>
                    <Link to="/signup"> Registre-se</Link>
                </C.Strong>
            </C.LabelSignup>
        </C.Content>
    </C.Container>
  );
};

export default Signin