import React from 'react'
import styled from 'styled-components'



const List = (props)=>{
    return(
        <Ul>{props.listItems}</Ul>
    )
}
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
export default List