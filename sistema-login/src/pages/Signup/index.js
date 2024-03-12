import React, {useState} from 'react';
import * as C from "./styles";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from '../../../src/pages/assets/metaverso-animate.png'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {signup} = useAuth();

    const handleSignup = () => {
        if (!email | !emailConf | !senha ){
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        const res = signup(email, senha)
        if (res) {
            setError(res);
            return;
        }
        
        alert("Usuário Cadastrado com sucesso!")
        navigate("/");
    };


  return (
    <C.Container>
            <C.LeftSignup>
                <h1>Organize-se: <br/>Sua lista de tarefas <br/>em um só lugar!</h1>
                <img src={img} alt="Pessoas" />
            </C.LeftSignup>
            <C.RightSignup>
                <C.CardSignup>
                <h1>Cadastre-se</h1>
                <C.TextField>
                    <label htmlFor="usuario">E-mail</label>
                    <input
                    type="text"
                    name="usuario"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                </C.TextField>
                <C.TextField>
                    <label htmlFor="usuario">Confirmação de Email</label>
                    <input
                    type="text"
                    name="usuario"
                    placeholder="Confirme seu e-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                    />
                </C.TextField>
                <C.TextField>
                    <label htmlFor="senha">Senha</label>
                    <input
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                </C.TextField>
                <C.LabelError>{error}</C.LabelError>
                <C.BtnSignup onClick={handleSignup}>Cadastrar</C.BtnSignup>
                <C.LabelSignup>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/"> Entre</Link>
                    </C.Strong>
                </C.LabelSignup>
                </C.CardSignup>
            </C.RightSignup>
    </C.Container>
  )
}

export default Signup