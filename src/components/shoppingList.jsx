import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { getTokenFromLocalStorage } from "../assets/token";

const ShoppingList = (props) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [newProduct, setNewProduct] = useState("");
  const [NewProductWeight, setNewProductWeight] = useState("");
  const [NewProductAmount, setNewProductAmount] = useState("");

  // ADDING PRODUCTS

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
        .get("http://localhost:8000/user/me", {
          headers: getTokenFromLocalStorage(),
        })
        .then((res) => {
          setShoppingCart(res.data.shoppingCart);
        })
        .catch((err) => {
          props.dispatch({ type: "LOGOUT" });
          console.log(err);
        });
    } else {
      props.dispatch({ type: "LOGOUT" });
    }
  };
  const addNewProductToDbHandler = (e) => {
    e.preventDefault();
    if (newProduct.length > 0) {
      axios
        .patch(
          "http://localhost:8000/user/addProduct",
          {
            name: newProduct,
            weight: NewProductWeight,
            amount: NewProductAmount,
          },
          { headers: getTokenFromLocalStorage() }
        )
        .then(() => {
          setShoppingCart([]);
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
  //        DELETING PRODUCTS

  const deleteProductHandler = (e) => {
    axios
        .patch(
          "http://localhost:8000/user/removeProduct",
          {
            name: e,
           
          },
          { headers: getTokenFromLocalStorage() }
        )
        .then(() => {
          setShoppingCart([]);
          getProductListFromDB();
        })

        .catch((err) => {
          console.log({ error: err });
        });
  };

  // SIDE EFFECTS
  useEffect(() => {
    console.log("use effect fired");
    getProductListFromDB();
  }, []);

  const listItems = shoppingCart.map((el, i) => {
    return (
      <li key={i}>
        <span>{el.name}</span>
        <span>{el.amount ? el.amount : "-"}</span>
        <span>{el.weight ? `${el.weight} kg` : "- "}</span>
        <span
          className="deleteBtn"
          onClick={() => {
            deleteProductHandler(el.name);
          }}
        >
          X
        </span>
      </li>
    );
  });

  return (
    <>
      <ShoppingCartContainer>
        <Ul>{listItems}</Ul>
      </ShoppingCartContainer>
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
        
        <button type="submit" onClick={addNewProductToDbHandler}>
          dodaj
        </button>
      </Form>
    </>
  );
};
const ShoppingCartContainer = styled.section`
  width: 70%;
  max-width: 400px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  
  border-radius: 10px;
  padding: 20px;
  background-color:#fff;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  height: 100%;
  width: 100%;
  list-style: none;
  text-transform: uppercase;
  padding: 0;
  text-align: center;
  min-width: 290px;
  color:#534292;
  li {
    width: 100%;
    display: grid;
    grid-template-columns: 135px repeat(2,1fr) 20px;
    grid-template-rows: 50px;
    grid-template-areas: "name amount weight delete";
    text-align:center;
    &:nth-of-type(2n){
      background-color:#eee;
    }

    margin: 3px 0;
    span {
      justify-self: center;
      align-self: center;
    }
    span:nth-of-type(1) {
      grid-area: name;
    }
    span:nth-of-type(2) {
      grid-area: amount;
    }
    span:nth-of-type(3) {
      grid-area: weight;
    }
    span.deleteBtn {
      background-color: #534292;
      color:#fff;
      grid-area: delete;
      padding: 2px;
    }
  }
`;
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

export default connect(mapStateToProps)(ShoppingList);
