import React,{useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import isEmail from 'validator/lib/isEmail';
const RegisterForm = (props)=>{
    const [registerError,setRegisterError] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword,setRepeatedPassword]=useState('')

    const registerUserHandler=(e)=>{
           e.preventDefault()     
           if(isEmail(email) && password===repeatedPassword){
            axios.post('http://localhost:8000/user/register', {
                name: email,
                email: email,
                password:password
              })
              .then((res)=> {
                  console.log(res.status)
                  if(registerError){
                      setRegisterError(false)
                  }
                  if(res.data.token ){
                      console.log(res.data.token)
                    const token =res.data.token;
                    localStorage.setItem('access-token',token);
                    props.dispatch({type:'LOGIN'})
                  }else{
                      if(!registerError){
                          setRegisterError(true)
                      }
                  }
                 
                console.log(res);
              })
              .catch(function (error) {
                  setRegisterError(true)
               
            
            });
           }
           setRegisterError(true)
          
          
    }
    const  emailHandler = (e)=>{
       setEmail(e.target.value) 
    }
    const  passwordHandler = (e)=>{
        setPassword(e.target.value) 
     }
     const repeatedPasswordHandler = (e)=>{
         setRepeatedPassword(e.target.value)
     }
    return(
        
     
           
            <Form>
                <input type="email" name="email" placeholder='email' onChange={emailHandler} value={email}/>
                <input type="password" name=""  placeholder='password' onChange={passwordHandler} value={password}/>
                <input type="password" name=""  placeholder='repeat password' onChange={repeatedPasswordHandler} value={repeatedPassword}/>
                {registerError?<p>wrong email or password </p>:null}
                <button type='submit' onClick={registerUserHandler}>Register</button>
            </Form>
           
    )
}

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
        border:1px solid #534292;
        border-radius: 10px;
       padding:10px;
       color:#35d388;
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

export default RegisterForm