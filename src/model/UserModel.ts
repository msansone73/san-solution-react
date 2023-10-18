
export type UserModel = {
    id:number
    email: string
    pass?: string
    name: string
    dateCreate: Date
    admin:boolean
    enable:boolean
}