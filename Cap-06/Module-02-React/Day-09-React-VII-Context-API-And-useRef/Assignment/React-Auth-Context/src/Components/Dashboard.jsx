import React from 'react'
import { AuthContext } from '../Context/AuthContextProvider'


export const Dashboard = () => {
    const {token} = useContext(AuthContext)
    return (
        <div >
            <h3 data-testid="token" >Token: {token}</h3>
            <button data-testid = "logout" >LOGOUT</button>
        </div>
    )
}
