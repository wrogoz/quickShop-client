export  const getTokenFromLocalStorage = ()=>{
    const token = localStorage.getItem('access-token')
    return {'access-token':token}
}
export const saveTokenToLocalStorage = (token)=>{
    const result = localStorage.setItem('access-token',token)
    return result
}

