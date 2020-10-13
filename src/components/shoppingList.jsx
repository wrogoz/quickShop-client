import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {connect} from 'react-redux'
import {getTokenFromLocalStorage} from '../assets/token'

const ShoppingList = (props)=>{

const [shoppingCart, setShoppingCart] = useState([])
const [newProduct, setNewProduct]=useState('')
const [NewProductWeight, setNewProductWeight]=useState('')
const [NewProductAmount, setNewProductAmount]=useState('')

const setNewProductNameHandler = (e)=>{
  setNewProduct(e.target.value)
  console.log(newProduct)
}
const setNewProductWeightHandler = (e)=>{
  setNewProductWeight(e.target.value)
  console.log(NewProductWeight)
}
const setNewProductAmountHandler = (e)=>{
  setNewProductAmount(e.target.value)
  console.log(NewProductAmount)
}

const addNewProductToDbHandler =(e)=>{
  e.preventDefault();
  console.log({
    name:newProduct,
    weight:NewProductWeight,
    amount:NewProductAmount
    
  })
  axios.patch('http://localhost:8000/user/addProduct',
    {
      name:newProduct,
      weight:NewProductWeight,
      amount:NewProductAmount
    },
    {headers:getTokenFromLocalStorage(),
}
)
  .then(res=>{
    if(localStorage.getItem('access-token')){
      axios.get('http://localhost:8000/user/me',{headers:getTokenFromLocalStorage()})
      .then((res)=>{
        
       setShoppingCart(res.data.shoppingCart)
        
      })
      .catch((err)=>{
        props.dispatch({type:"LOGOUT"})
        console.log(err)
      })
    }else{
      props.dispatch({type:"LOGOUT"})
    }
  })
  .catch(err=>{
    console.log(`:(`)
  })
}

useEffect(() => {
  if(localStorage.getItem('access-token')){
    axios.get('http://localhost:8000/user/me',{headers:getTokenFromLocalStorage()})
    .then((res)=>{
      
     setShoppingCart(res.data.shoppingCart)
      
    })
    .catch((err)=>{
      props.dispatch({type:"LOGOUT"})
      console.log(err)
    })
  }else{
    props.dispatch({type:"LOGOUT"})
  }
},[])

  const listItems=shoppingCart.map((el,i)=>{
    return(
    <li key={i}><span>{el.name}</span><span>{el.amount?el.amount:'-'}</span><span>{el.weight?`${el.weight} kg`:'- '}</span></li>
    )
  })
  console.log(listItems)
    return(
    <>
   
    <ShoppingCartContainer>
     
        <Ul>
          {listItems}
      </Ul>
     
      </ShoppingCartContainer>
      <Form>
       <label>Dodaj produkt: <input type="text" name="produkt" onChange={setNewProductNameHandler} value={newProduct}/></label> 
       <label>waga: <input type="text" name="produkt" onChange={setNewProductWeightHandler} value={NewProductWeight}/></label> 
       <label>ilość: <input type="text" name="produkt" onChange={setNewProductAmountHandler} value={NewProductAmount}/></label> 
        <button type='submit' onClick={addNewProductToDbHandler}>dodaj</button>
    </Form>
    </>
    
    )
}
const ShoppingCartContainer = styled.section`
    width: 70%;
    max-width:400px;
    height: 60%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    border:1px solid #35d388;
    border-radius: 10px;
    padding:20px;
    
    
`
const Ul=styled.ul`
  display:flex;
  flex-direction:column;
  align-items:space-evenly;
  height:100%;
  width:100%;
  list-style:none;
  text-transform:uppercase;
  padding:0;
  text-align:center;
  min-width:290px;
  li{
    width:100%;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:50px;
    grid-template-areas:
    "name amount weight";
    span:nth-of-type(1){
      grid-area:name;
    }
    span:nth-of-type(2){
      grid-area:amount;
    }
    span:nth-of-type(3){
      grid-area:weight;
    }
    
  }
`
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