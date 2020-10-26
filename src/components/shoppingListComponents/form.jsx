import React,{useState} from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";
import axios from 'axios'
import { getTokenFromLocalStorage } from "../../assets/token"
import {editShoppingCart,resetShoppingCart} from '../../redux/actions'
const ShoppingForm = (props)=>{
  
    const [newProduct, setNewProduct] = useState("");
    const [NewProductWeight, setNewProductWeight] = useState("");
    const [NewProductAmount, setNewProductAmount] = useState("");

  const setNewProductNameHandler = (e) => {
    setNewProduct(e.target.value);
  };
  const setNewProductWeightHandler = (e) => {
    setNewProductWeight(e.target.value);
  };
  const setNewProductAmountHandler = (e) => {
    setNewProductAmount(e.target.value);
  };
  const getProductListFromDB = () => {
    if (localStorage.getItem("access-token")) {
      axios
        .get("http://wr-quickshop.herokuapp.com/user/me", {
          headers: getTokenFromLocalStorage(),
        })
        .then((res) => {
            props.dispatch(editShoppingCart(res.data.shoppingCart))
         
        })
        .catch((err) => {
          props.dispatch({ type: "LOGOUT" });
          console.log(err);
        });
    } else {
      props.dispatch({ type: "LOGOUT" });
    }
  };

  const addNewProductToDbCart = (e) => {
    e.preventDefault();
    if (newProduct.length > 0) {
      axios
        .patch(
          "http://wr-quickshop.herokuapp.com/user/addProduct",
          {
            name: newProduct,
            weight: NewProductWeight,
            amount: NewProductAmount,
          },
          { headers: getTokenFromLocalStorage() }
        )
        .then(() => {
          props.dispatch(resetShoppingCart());
          setNewProduct("");
          setNewProductWeight("");
          setNewProductAmount("");
          getProductListFromDB();
        })

        .catch((err) => {
          console.log({ error: err });
        });
    } else {
      console.log("u must provide product name");
    }
  };
    return(
        <Form>
        
        <input
          type="text"
          name="product"
          onChange={setNewProductNameHandler}
          value={newProduct}
          placeholder="dodaj produkt"
        />
     
    
        <input
          type="number"
          name="weight"
          onChange={setNewProductWeightHandler}
          value={NewProductWeight}
          placeholder="waga produktu"
        />
      
      
        <input
          type="number"
          name="amount"
          onChange={setNewProductAmountHandler}
          value={NewProductAmount}
          placeholder="ilość"
        />
      
      <button type="submit" onClick={addNewProductToDbCart}>
        dodaj
      </button>
    </Form>
    )
}
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:20px 0;
  padding: 20px;
  background-color:#fff;
    border-radius: 10px;
    width: 70%;
    max-width: 400px;
  input{
        margin:5px;
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
`;

const mapStateToProps = (state, ownProps) => ({
    test: state.test,
    isUserLoggedIn: state.isUserLoggedIn,
  });
export default connect(mapStateToProps)(ShoppingForm)