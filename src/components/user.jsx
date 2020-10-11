import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const User = (props) =>{
    return(
        <UserContainer>
           <Link to="/register"> <Button>register</Button></Link>
           <Link to="/login"><Button>login</Button></Link> 
     
    
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
    max-width:400px;
    
`
const Button = styled.button`

        background:#35d388;
        border:none;
        padding:10px;
        color:#fff;
        border-radius:10px;
        margin:10px;
        min-width:150px;
       
        a{
            text-decoration:none;
            color:#fff;
           
            background-color:#35d388;
            
        }
        
`

export default User