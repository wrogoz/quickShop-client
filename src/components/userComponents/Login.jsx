import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
const Login = ()=>{
    return(
        <>
            login component
            <button><Link to='/'>Back button</Link></button>
        </>
    )
}

const mapStateToProps = (state, ownProps) => ({
    test: state.test,
    isUserLoggedIn:state.isUserLoggedIn
  })
  
  export default connect(mapStateToProps)(Login)