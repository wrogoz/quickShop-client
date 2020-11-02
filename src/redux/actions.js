

export const editShoppingCart = (shoppingCart)=>{
    return {
        type:'EDITSHOPPINGCART',
        shoppingCart
    }
}
export const resetShoppingCart = ()=>{
    return {
        type:'RESETSHOPPINGCART'
    }
}

export const deleteProduct = (shoppingCart,product)=>{
    const result = shoppingCart.filter(el=>{
        return el.name!==product
    })
    return {
        type:"DELETEPRODUCT",
        shoppingCart:result
    }
}