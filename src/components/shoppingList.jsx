import React,{useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {connect} from 'react-redux'

const ShoppingList = (props)=>{

useEffect(() => {
  if(localStorage.getItem('access-token')){
    axios.get('http://localhost:8000/user/me',{headers:{'access-token':localStorage.getItem('access-token')}})
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      props.dispatch({type:"LOGOUT"})
    })
  }else{
    props.dispatch({type:"LOGOUT"})
  }
}, [])
    return(<>
    
        <ul>
        <li> item x</li>
        <li> item x</li>
        <li> item x</li>
        <li> item x</li>
        <li> item x</li>
        <li> item x</li>
      </ul>
      <Form>
       <label>Dodaj produkt: <input type="text" name="produkt"/></label> 
       <label>waga: <input type="text" name="produkt"/ ></label> 
       <label>ilość: <input type="text" name="produkt"/></label> 
        <button type='submit'>dodaj</button>
    </Form>
      </>
    )
}

const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
`
const mapStateToProps = (state, ownProps) => ({
    test: state.test,
    isUserLoggedIn:state.isUserLoggedIn
  })
  
  export default connect(mapStateToProps)(ShoppingList)