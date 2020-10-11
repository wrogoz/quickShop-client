import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const User = (props) =>{
    return(
        <>
            <button><Link to="/register">register</Link></button>
            <button><Link to="/login">login</Link></button>
     
    
        </>
    )
}


export default User