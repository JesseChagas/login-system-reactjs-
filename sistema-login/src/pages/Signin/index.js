import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import * as C from "./styles";
import img from '../../../src/pages/assets/metaverso-animate.png'


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
            <C.LeftLogin>
                <h1>Organize-se: <br/>Sua lista de tarefas <br/>em um só lugar!</h1>
                <img src={img} alt="Pessoas" />
            </C.LeftLogin>
            <C.RightLogin>
                <C.CardLogin>
                <h1>Login</h1>
                <C.TextField>
                    <label htmlFor="usuario">Usuário</label>
                    <input
                    type="text"
                    name="usuario"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                </C.TextField>
                <C.TextField>
                    <label htmlFor="senha">Senha</label>
                    <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                </C.TextField>
                <C.LabelError>{error}</C.LabelError>
                <C.BtnLogin onClick={handleLogin}>Login</C.BtnLogin>
                <C.LabelSignup>
                    Não tem uma conta?
                    <C.Strong>
                        <Link to="/signup"> Registre-se</Link>
                    </C.Strong>
                </C.LabelSignup>
                </C.CardLogin>
            </C.RightLogin>
    </C.Container>
  );
};


export default Signin;