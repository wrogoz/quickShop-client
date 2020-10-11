import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
const Register = ()=>{
    return(
        <>
            Register component
            <Form>
                <input type="email" name="email" id="" placeholder='email'/>
                <input type="password" name="" id="" placeholder='password'/>
                <button type='submit'>Register</button>
            </Form>
            <button><Link to='/'>Back button</Link></button>
        </>
    )
}
const Form = styled.form`
    display:flex;
    flex-direction:column;
    padding:10px 0;
    input{
        margin:10px;
    }
`
const mapStateToProps = (state, ownProps) => ({
    test: state.test,
    isUserLoggedIn:state.isUserLoggedIn
  })
  
  export default connect(mapStateToProps)(Register)