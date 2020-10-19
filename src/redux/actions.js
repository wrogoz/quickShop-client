

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