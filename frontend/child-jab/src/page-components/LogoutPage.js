import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutAuth } from '../_actions/auth.action';

function LogoutPage(props) {
    
    console.log('Logout Page')
    console.log(props.auth)
    
    const history = useHistory();
    if(!props.auth.user){      
        let user = sessionStorage.getItem("user")
        //sessionStorage.clear()
        sessionStorage.removeItem("auth")
        switch(user){
          case "admin":
            history.push(`/admin-login`)
            break;
          case "center":
            history.push(`/center-login`)
            break;
          case "parents":
            history.push(`/host-login`)
            break;
          default:
            history.push('/')
            break;
        }
      }
    useEffect(() => {
        props.logoutAuth()
    }, [])
    return (
        <div>
            {/* <Redirect to="/login"></Redirect> */}
        </div>
    )
}


const mapStateToProps =(state)=>{
    return {
      auth : state.authReducer
    }
  }
  
  //step 2
  const mapDispatchToProps =(dispatch)=>{
    return {
      logoutAuth : ()=>dispatch(logoutAuth())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage)
