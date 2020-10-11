import React from 'react'
import styled from 'styled-components'


const ShoppingList = ()=>{
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
export default ShoppingList