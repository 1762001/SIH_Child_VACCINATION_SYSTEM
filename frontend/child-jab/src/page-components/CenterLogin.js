import React, { useState } from 'react'
import '../Homepage-src/Home-Page/MainPage.css'
import { Form, Row, Col, Container, Card} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { loginCenter } from '../_actions';
import { createAuth } from '../_actions/auth.action';
import centerlogo from '../Homepage-src/img/centerlogins.png'


function CenterLogin(props) {
    const history = useHistory();
   
    const [center, setCenter] = useState({
      email_id : null,
      password : null,
      errors : {
        email_id : 'Required',
        password : 'Required'
      }
    })

    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const handleChange=(e)=>{
      let name = e.target.name
      let value = e.target.value
      let errors = center.errors

      switch(name){
        case 'email_id':
          if(value.trim()==''){
          errors.email_id ='Required'
          break;
        }
        if(!validEmailRegex.test(value)){
           errors.email_id = 'Email is not valid'
           break;

        } 
          errors.email_id = ''
          break;
        
        case 'password':
          errors.password = 
             value.length < 6? 'Password must atleast of 6 characters' : ''
             break;
          }

      setCenter ({
        ...center,
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

    if(props.auth.user && props.center.center.id>0)
    {    
        history.push(`/manage-children`) 
      }
      
    
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        if(validateForm(center.errors)){
          props.authenticate()
          props.loginCenter(center)
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
                    props.center.error
                  }
            <Card className="card" style={{ width: "23rem" }} align="center">
              <Card.Header><h2>Center Login</h2></Card.Header>
              <Card.Img className="img_center"  src={centerlogo} style={{ width: "60px", height : "60px"}} />
              <Card.Body>
                <Form className="Centerform" method="post" onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"
                    name="email_id" value={center.email_id} onChange={handleChange} />
                    <div className="input-group mb text-danger">
                   {center.errors.email_id}
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password"
                    name="password" value={center.password} onChange={handleChange} />
                    <div className="input-group mb text-danger">
                    {center.errors.password}
                    </div>
                  </Form.Group>
                </Form>
                <button className="getstarted_btn" onClick={handleSubmit}>Login</button>
              </Card.Body>
              <p className="mb-1">
         <Link to="center-forgotpassword">I forgot my password</Link>
       </p>
       <p className="mb-0">
         <Link to="center-registration" className="text-center">Register a new membership</Link>
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
//   <b>Center</b>
//   </div>
//   {
//              props.center.error 
//            }
//   <div className="card">
//     <div className="card-body login-card-body">
//       <p className="login-box-msg">Sign in to start your session</p>
//       <form action="../../index3.html" method="post" onSubmit={handleSubmit}>
//         <div className="input-group mb-3">
//           <input type="email" className="form-control" placeholder="Email"
//           name="email_id" value={center.email_id}  onChange={handleChange}  />
//           <div className="input-group-append">
//             <div className="input-group-text">
//               <span className="fas fa-envelope" />
//             </div>
//           </div>
//           <div className="input-group mb text-danger">
//             {center.errors.email_id}
//           </div>
//         </div>
//         <div className="input-group mb-3">
//           <input type="password" className="form-control" placeholder="Password"
//           name="password" value={center.password} onChange={handleChange} />
//           <div className="input-group-append">
//             <div className="input-group-text">
//               <span className="fas fa-lock" />
//             </div>
//           </div>
//           <div className="input-group mb text-danger">
//           {center.errors.password}
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
//             {/* <button type="submit" className="btn btn-success btn-block">Sign In</button> */}
//             <Button variant="success" onClick={handleSubmit}>Sign In</Button>
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
//         <Link to="center-forgotpassword">I forgot my password</Link>
//       </p>
//       <p className="mb-0">
//         <Link to="center-registration" className="text-center">Register a new membership</Link>
//       </p>
//     </div>
//   </div>
// </div>

// </div>
    
//     )
// }

const mapStateToProps = (state)=>{
    return{
        auth : state.authReducer,
        center : state.centerReducer
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
     authenticate : ()=> dispatch(createAuth()),
     loginCenter : (center) => dispatch(loginCenter(center))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CenterLogin)