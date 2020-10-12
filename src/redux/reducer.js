
const initialState = {
    test:'reducer test',
    isUserLoggedIn:true
   }
  
  const reducer = (state = initialState, action)=> {
      switch (action.type) {
     
        case 'LOGIN':
          return{
            ...state,
            isUserLoggedIn:true
          }
          case 'LOGOUT':
          return{
            ...state,
            isUserLoggedIn:false
          }
      
        default:
          return state
      }
    }
  
    export default reducer;