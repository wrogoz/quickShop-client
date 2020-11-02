import React, { useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { getTokenFromLocalStorage } from "../assets/token";
import ShoppingForm from './shoppingListComponents/form';
import { editShoppingCart} from "../redux/actions";
import List from './shoppingListComponents/list';
import dumpster from '../assets/images/dumpster.svg';
const ShoppingList = (props) => {
 

 


  const getProductListFromDB = () => {
    if (localStorage.getItem("access-token")) {
      
     axios
        .get("https://wr-quickshop.herokuapp.com/user/me", {
          headers: getTokenFromLocalStorage(),
        
        })
        .then((res) => {
          
          props.dispatch(editShoppingCart(res.data.shoppingCart))
        
        })
        .catch((err) => {
          props.dispatch({ type: "LOGOUT" });
          console.log(err);
          console.log('client err')
        });
    } else {
      props.dispatch({ type: "LOGOUT" });
    }
  };
  
  //        DELETING PRODUCTS

  const deleteProductHandler = (e) => {
    axios
        .patch(
          "https://wr-quickshop.herokuapp.com/user/removeProduct",
          {
            name: e,
           
          },
          { headers: getTokenFromLocalStorage() }
        )
        .then(() => {
         
          getProductListFromDB();
        })

        .catch((err) => {
          console.log({ error: err });
        });
        
  };

  // SIDE EFFECTS
  useEffect(() => {
    
    getProductListFromDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  const listItems = props.shoppingCart.map((el, i) => {
    return (
      <li key={i}>
        <span><p>{el.name}</p></span>
        <span><p>{el.amount ? el.amount : "-"}</p></span>
        <span><p>{el.weight ? `${el.weight} kg` : "- "}</p></span>
        <span
          className="deleteBtn"
          onClick={() => {
            deleteProductHandler(el.name);
          }}
        >
          <img src={dumpster} alt="delete item "/>
        </span>
      </li>
    );
  });

  return (
    <>
      <ShoppingCartContainer>
        <List
          listItems={listItems}
        />
        
      </ShoppingCartContainer>
      <ShoppingForm/>
    </>
  );
};
const ShoppingCartContainer = styled.section`
  width: 70%;
  min-width: 260px;
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

const mapStateToProps = (state, ownProps) => ({
  test: state.test,
  isUserLoggedIn: state.isUserLoggedIn,
  shoppingCart:state.shoppingCart
});

export default connect(mapStateToProps)(ShoppingList);
