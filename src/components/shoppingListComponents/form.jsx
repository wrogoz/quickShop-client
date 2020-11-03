import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import { getTokenFromLocalStorage } from "../../assets/token";
import { addProduct } from "../../redux/actions";
const ShoppingForm = (props) => {
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

  const addNewProductToDbCart = (e) => {
    e.preventDefault();

    if (newProduct.length > 0) {
      props.dispatch(
        addProduct(props.shoppingCart, {
          name: newProduct,
          weight: NewProductWeight,
          amount: NewProductAmount,
        })
      );

      axios
        .patch(
          "https://wr-quickshop.herokuapp.com/user/addProduct",
          {
            name: newProduct,
            weight: NewProductWeight,
            amount: NewProductAmount,
          },
          { headers: getTokenFromLocalStorage() }
        )
        .then(() => {
          setNewProduct("");
          setNewProductWeight("");
          setNewProductAmount("");
        })

        .catch((err) => {
          console.log({ error: err });
        });
    } else {
      console.log("u must provide product name");
    }
  };
  return (
    <Form>
      <input
        type="text"
        name="product"
        onChange={setNewProductNameHandler}
        value={newProduct}
        placeholder="product name"
      />

      <input
        type="number"
        name="weight"
        onChange={setNewProductWeightHandler}
        value={NewProductWeight}
        placeholder="weight"
      />

      <input
        type="number"
        name="amount"
        onChange={setNewProductAmountHandler}
        value={NewProductAmount}
        placeholder="quantity"
      />

      <button type="submit" onClick={addNewProductToDbCart}>
        Add product
      </button>
    </Form>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  width: 70%;
  max-width: 400px;
  input {
    margin: 5px;
    border: 1px solid #534292;
    border-radius: 10px;
    padding: 10px;
    color: #534292;
    outline: none;
    text-align:center;
    
    &::placeholder{
      text-align:center;
    }
   
  }
  input[type='number']::-webkit-inner-spin-button, 
    input[type='number']::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    margin: 0;
}
 
  
  button {
    min-width: 150px;
    background: #534292;
    border: none;
    padding: 10px;
    margin-top: 10px;
    color: #fff;
    border-radius: 10px;
    outline: none;
  }
`;

const mapStateToProps = (state) => ({
  test: state.test,
  isUserLoggedIn: state.isUserLoggedIn,
  shoppingCart: state.shoppingCart,
});
export default connect(mapStateToProps)(ShoppingForm);
