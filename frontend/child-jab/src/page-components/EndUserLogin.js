import React, { useState } from 'react'
import { Form, Row, Col, Container, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { loginParents } from '../_actions';
import { createAuth } from '../_actions/auth.action';
import enduserlogo from '../Homepage-src/img/enduser.png'
import '../Homepage-src/Home-Page/MainPage.css'

function EndUserLogin(props) {

    const history = useHistory();
    const [parents, setParents] = useState({
      email : null,
      password : null,
      errors : {
        email : 'Required',
        password : 'Required'
      }
    })

    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const handleChange=(e)=>{
      let name = e.target.name
      let value = e.target.value
      let errors = parents.errors

      switch(name){
        case 'email':
          if(value.trim()==''){
            errors.email='Required'
            break;
          }
          if(!validEmailRegex.test(value)){
            errors.email='Email is not valid'
            break;
          }
          errors.email=''
          break;

          case 'password':
            errors.password = 
            value.length < 6 ? 'Password should atleast of 6 characters' : ''
            break;
      }

      setParents({
        ...parents,
        [name]:value,
        errors
      })
    }

    const validateForm = (errors)=>{
      let valid=true;
      Object.values(errors).forEach(
        (val)=>val.length>0 && (valid=false)
      );
      return valid;
    }


    if(props.auth.user && props.parents.parents.id>0)
    {
      sessionStorage.setItem("user","parents")
      history.push(`/child-care`) 
      }
     
    
   
    
    const handleSubmit=(e)=>{
        e.preventDefault()

        if(validateForm(parents.errors)){
        props.authenticate()
        props.loginParents(parents)
          alert('Hurray! Login Successfull')
        }
        else{
          alert('Sorry! Login Falied')
        }
        
    }

    return (   
        <> 
          <div className="MainPage hold-transition login-page login-box">
      <div className="text_head">
      <h1 >!!Please make sure to Register first with right Credentials!!</h1>
      </div>
        
      
      <Container className="container_first container_login">
        
        
        <Row>
          
          <Col>
          {
                    props.parents.error
                  }
            <Card className="card" style={{ width: "23rem"}} align="center">
              <Card.Header><h2>Parents Login</h2></Card.Header>
              <Card.Img className="img_center"  src={enduserlogo} style={{ width: "60px", height : "60px"}} />
              <Card.Body>
                <Form className="EndUserform" method="post" onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"
                    name="email" value={parents.email} onChange={handleChange} />
                    <div className="input-group mb text-danger">
                   {parents.errors.email}
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password"
                    name="password" value={parents.password} onChange={handleChange} />
                    <div className="input-group mb text-danger">
                    {parents.errors.password}
                    </div>
                  </Form.Group>
                </Form>
                <button className="getstarted_btn" onClick={handleSubmit}>Login</button>
              </Card.Body>
          <p className="mb-1">
         <Link to="host-forgotpassword">I forgot my password</Link>
       </p>
       <p className="mb-0">
         <Link to="host-registration" className="text-center">Register a new membership</Link>
       </p>
            </Card>
          </Col>
       </Row>
       </Container>
       </div>
           </>
    )
}
  
           
//         <div className="hold-transition login-page">
//         <div className="login-box">
//         <div className="login-logo">   
//     <b>End-User</b>
//   </div>
//   {
//              props.parents.error 
//            }
//   <div className="card">
//     <div className="card-body login-card-body">
//       <p className="login-box-msg">Sign in to start your session</p>
//       <form action="../../index3.html" method="post" onSubmit={handleSubmit}>
//         <div className="input-group mb-3">
//           <input type="email" className="form-control" placeholder="Email"
//           name="email" value={parents.email} onChange={handleChange} />
//           <div className="input-group-append">
//             <div className="input-group-text">
//               <span className="fas fa-envelope" />
//             </div>
//           </div>
//           <div className="input-group mb text-danger">
//           {parents.errors.email}
//           </div>
//         </div>
//         <div className="input-group mb-3">
//           <input type="password" className="form-control" placeholder="Password"
//           name="password" value={parents.password} onChange={handleChange} />
//           <div className="input-group-append">
//             <div className="input-group-text">
//               <span className="fas fa-lock" />
//             </div>
//           </div>
//           <div className="input-group mb text-danger">
//             {parents.errors.password}
//           </div>
//         </div>
       
//         <div className="row">
//           <div className="col-8">
//             <div className="icheck-primary">
//               <input type="checkbox" id="remember" />
//               <label htmlFor="remember">
//                 Remember Me
//               </label>
//             </div>
//           </div>
//           {/* /.col */}
//           <div className="col-4">
//             {/* <button type="submit" className="btn btn-primary btn-block">Sign In</button> */}
//             <Button variant="danger" onClick={handleSubmit}>Sign In</Button>
//           </div>
//           {/* /.col */}
//         </div>
//       </form>
//       {/* <div className="social-auth-links text-center mb-3">
//         <p>- OR -</p>
//         <a href="#" className="btn btn-block btn-primary">
//           <i className="fab fa-facebook mr-2" /> Sign in using Facebook
//         </a>
//         <a href="#" className="btn btn-block btn-danger">
//           <i className="fab fa-google-plus mr-2" /> Sign in using Google+
//         </a>
//       </div> */}
//       {/* /.social-auth-links */}
//       <p className="mb-1">
//         <Link to="host-forgotpassword">I forgot my password</Link>
//       </p>
//       <p className="mb-0">
//         <Link to="host-registration" className="text-center">Register a new membership</Link>
//       </p>
//     </div>
//     {/* /.login-card-body */}
//   </div>
// </div>

// </div>
//     )
// }

const mapStateToProps = (state)=>{
    return{
        auth : state.authReducer,
        parents : state.parentsReducer
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
     authenticate : ()=> dispatch(createAuth()),
     loginParents : (parents) => dispatch(loginParents(parents))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EndUserLogin)