import { useState } from "react"
import { useDispatch } from "react-redux"
import { setUser } from "../redux/loginSlice";

export default function Login(){

    const [login, setLogin] = useState("")
    const [pass, setPass] = useState("")

    const dispatch = useDispatch();

    function doLogin():void{
        dispatch(setUser({
            "id":0,
            "email":login, 
            "pass":pass,
            "name":""
        }))

    }

    return(
        <>
            <h1>Login</h1>
            <p>Login to your account</p>
            <input type="text" placeholder="email" id="login" onChange={(e)=>setLogin(e.target.value)} value={login} />
            <input type="password" placeholder="senha" id="pass" onChange={(e)=>setPass(e.target.value)} value={pass} />
            <button onClick={doLogin}> Login</button>
        </>
    )
}

