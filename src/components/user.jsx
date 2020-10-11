import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const User = (props) =>{
    return(
        <UserContainer>
            <Button><Link to="/register">register</Link></Button>
            <Button><Link to="/login">login</Link></Button>
     
    
        </UserContainer>
    )
}
const UserContainer = styled.section`
    width: 70%;
    height: 60%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:1px solid #35d388;
    border-radius: 10px;
    padding:20px;
    
`
const Button = styled.button`

        background:#35d388;
        border:none;
        padding:10px;
        color:#fff;
        border-radius:10px;
        margin:10px;
        width:60%;
        a{
            text-decoration:none;
            color:#fff;
            padding:10px;
        }
        
`

export default User