import React,{useState} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Register = (props)=>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const registerUserHandler=(e)=>{
           e.preventDefault()     
           axios.post('http://localhost:8000/user/register', {
            name: {email},
            email: {email},
            password:{password}
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
           console.log('register user btn clicked')
           console.log(`email:${email} password:{password}`)
    }
    const  emailHandler = (e)=>{
       setEmail(e.target.value) 
    }
    const  passwordHandler = (e)=>{
        setPassword(e.target.value) 
     }
    return(
        
        <RegisterContainer>
           
            <Form>
                <input type="email" name="email" id="email" placeholder='email' onChange={emailHandler} value={email}/>
                <input type="password" name="" id="password" placeholder='password' onChange={passwordHandler} value={password}/>
                <button type='submit' onClick={registerUserHandler}>Register</button>
            </Form>
            <BackButton><Link to='/'>Back button</Link></BackButton>
        </RegisterContainer>
    )
}
const RegisterContainer = styled.section`
    width: 70%;
    height: 60%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    border:1px solid #35d388;
    border-radius: 10px;
    padding:20px;
    
    
`
const Form = styled.form`
    display:flex;
    height:100%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px 0;
    input{
        margin:10px;
        text-align:center;
        border:1px solid #35d388;
        border-radius: 5%;
       padding:10px;
       color:#35d388;
       outline:none;
    }
    button{
        width:50%;
        background:#35d388;
        border:none;
        padding:10px;
        margin-top:10px;
        color:#fff;
        border-radius:10px;
    }
  
`
const BackButton = styled.button`
    width:50%;
        background:#35d388;
        border:none;
        padding:5px;
        color:#fff;
        border-radius:10px;
    a{
        text-decoration:none;
        color:#fff;

    }
    
`
const mapStateToProps = (state, ownProps) => ({
    test: state.test,
    isUserLoggedIn:state.isUserLoggedIn
  })
  
  export default connect(mapStateToProps)(Register)