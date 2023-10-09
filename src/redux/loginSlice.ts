import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UserModel } from "../model/UserModel"

const initialState: UserModel = {
    id:-1,
    email:'fff',
    name:'',
    pass:''
}

export const userSlice = createSlice(
    {
        name: 'loginRedux',
        initialState,
        reducers: {
            setUser: (state:UserModel, action: PayloadAction<UserModel>) => {
                state.id= action.payload.id
                state.email=action.payload.email
                state.name=action.payload.name
                state.pass=action.payload.pass
            }
        }
    }
)

export const {setUser} = userSlice.actions

export default userSlice.reducer