import React,{useState} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {saveTokenToLocalStorage} from '../../assets/token';
const Login = (props)=>{
    const [loginError,setLoginError] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const LoginUserHandler=(e)=>{
           e.preventDefault()     
           axios.post('http://localhost:8000/user/login', {
           
            email: email,
            password:password
          })
          .then(function (response) {
            
            
            if(loginError){
                setLoginError(false)
            }
            if(response.data.token){
                saveTokenToLocalStorage(response.data.token)
                props.dispatch({type:"LOGIN"});
            }else{
                if(!loginError){
                    setLoginError(true)
                }
            }
           
          })
          .catch(function (error) {
            console.log(error);
            setLoginError(true)
          });
           console.log('Login user btn clicked')
           console.log(`email:${email} password:${password}`)
    }
    const  emailHandler = (e)=>{
       setEmail(e.target.value) 
    }
    const  passwordHandler = (e)=>{
        setPassword(e.target.value) 
     }
    return(
        
        <LoginContainer>
          
            <Form>
                <input type="email" name="email" id="email" placeholder='email' onChange={emailHandler} value={email}/>
                <input type="password" name="" id="password" placeholder='password' onChange={passwordHandler} value={password}/>
                {loginError?<p>wrong email or password</p>:null}
                <button type='submit' onClick={LoginUserHandler}>Login</button>
            </Form>
            <BackButton><Link to='/'>Back </Link></BackButton>
        </LoginContainer>
    )
}
const LoginContainer = styled.section`
    width: 70%;
    max-width:400px;
    height: 60%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:#fff;
    border-radius: 10px;
    padding:20px;
    
`;
const Form = styled.form`

    font-family: 'Lato', sans-serif;
  
    display:flex;
    height:100%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px 0;
    input{
        
        margin:10px;
        text-align:center;
        border:1px solid #534292;
        border-radius: 10px;
       padding:10px;
       color:#534292;
       outline:none;
    }
    button{
        min-width:150px;
        background:#534292;
        border:none;
        padding:10px;
        margin-top:10px;
        color:#fff;
        border-radius:10px;
    }
  
`
const BackButton = styled.button`
        min-width:150px;
        background:#534292;
        border:none;
        padding:10px;
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
  
  export default connect(mapStateToProps)(Login)