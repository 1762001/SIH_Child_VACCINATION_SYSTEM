import React from 'react'
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
    //let auth = rest.auth
    let auth=sessionStorage.getItem("auth")
    console.log(rest)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/child-care",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  const mapStateToProps =(state)=>{
    return {
      auth : state.authReducer
    }
  }
  
  //step 2
  const mapDispatchToProps =(dispatch)=>{
    return {
      
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(PrivateRoute)
