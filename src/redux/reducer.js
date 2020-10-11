
const initialState = {
    test:'reducer test',
    isUserLoggedIn:false
   }
  
  const reducer = (state = initialState, action)=> {
      switch (action.type) {
     
        case 'TEST':
          return{
            ...state,
            WindowWidth:action.width
           
          }
      
        default:
          return state
      }
    }
  
    export default reducer;