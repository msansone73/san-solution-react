import { useEffect, useState } from "react";
import { UserModel } from "../model/UserModel";
import axios from "axios";
import {Buffer} from 'buffer';

export default function Users(){

    const url = import.meta.env.VITE_API_URL+"/security"
    const username = 'admin'
    const password = 'Batata'
    const token = `${username}:${password}`;
    const encodedToken = Buffer.from(token).toString('base64');
    const [users, setUsers] = useState<UserModel[]>([])
    

  useEffect( () =>{
    axios
        .get<UserModel[]>(url,
        {
            headers: {
                Accept: 'Application/json',
                'Authorization': 'Basic '+ encodedToken
            }
        },
    ).then ( data=> setUsers(data.data))

    }, []);


    return(<>
    <div>User</div>
    <div>
        {users.map(
            (user) => <div>{user.name}</div>
            )
        }
    </div>
    </>)
}