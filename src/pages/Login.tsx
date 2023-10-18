import { useState } from "react"
import { useDispatch } from "react-redux"
import { setUser } from "../redux/loginSlice";
import { UserModel } from "../model/UserModel";
import axios from "axios";
import {Buffer} from 'buffer';
import {useNavigate } from "react-router-dom";

export default function Login(){
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate();

    const url = "http://localhost:8000/api/security/login"
    const username = 'admin'
    const password = 'Batata'
    const token = `${username}:${password}`;
    const encodedToken = Buffer.from(token).toString('base64');
    const [login, setLogin] = useState("")
    const [pass, setPass] = useState("")

    const dispatch = useDispatch();

    async function doLogin():Promise<void>{

        try{
            const {data, status} = await axios.post<UserModel>(url,
                {"email":login,"pass":pass},
                {
                    headers: {
                        Accept: 'Application/json',
                        'Authorization': 'Basic '+ encodedToken
                    }
                },
            )
            console.log('data='+data)
            console.log('status='+status)
            if (status==200){
                dispatch(setUser(data))   
                setMensagem('') 
                navigate("/")

            } else {
                setMensagem('Falha ao se logar!')
            }
        } catch(error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
              } else {
                console.log('unexpected error: ', error);
              }
        }

    }

    return(
        <>
            <h1>Login</h1>
            <p>Login to your account</p>
            <input type="text" placeholder="email" id="login" onChange={(e)=>setLogin(e.target.value)} value={login} />
            <input type="password" placeholder="senha" id="pass" onChange={(e)=>setPass(e.target.value)} value={pass} />
            <button onClick={doLogin}> Login</button>
            <p>{mensagem}</p>
        </>
    )
}

