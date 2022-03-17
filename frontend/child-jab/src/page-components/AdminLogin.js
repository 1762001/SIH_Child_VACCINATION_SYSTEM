import React, { useState } from 'react'
import '../Homepage-src/Home-Page/MainPage.css'
import { Form, Row, Col, Container, Card, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { createAdmin } from '../_actions';
import { createAuth } from '../_actions/auth.action';
import adminlogo from '../Homepage-src/img/admin.png'

function AdminLogin(props) {
  
    const history = useHistory();
    const [admin, setAdmin] = useState({
      username : null,
      password : null,
      errors : {
        username : 'Required',
        password : 'Required'
      }
    })

    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const handleChange=(e)=>{
      let name=e.target.name
      let value =e.target.value
      let errors = admin.errors

      switch(name){
        case 'username':
          if(value.trim()==''){
            errors.username='Required'
            break;
          }
          if(!validEmailRegex.test(value)){
            errors.username='Username is not Valid'
            break;
          }
          errors.username=''
          break;

          case 'password':
            errors.password =
            value.length < 6 ? 'Password must be atleast 6 characters' : ''
            break;
      }

      setAdmin({
        ...admin,
        [name] : value,
        errors
      })
    }
    
   const validateForm =(errors)=>{
           let valid=true;
           Object.values(errors).forEach(
             (val)=>val.length>0 && (valid=false)
           );
        return valid;
      }

    if(props.auth.user && props.admin.admin.id>0)
        {
          
            history.push(`/manage-centers`) 
          } 
  
    const handleSubmit=(e)=>{
        e.preventDefault();
       
          if(validateForm(admin.errors))
          {
            props.authenticate()
            props.createAdmin(admin)
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
        
      
      <Container className="container_login container_first">
        
        
        <Row>
          
          <Col>
          {
                    props.admin.error
                  }
            <Card className="card" style={{ width: "23rem" }} align="center">
              <Card.Header><h2>Admin Login</h2></Card.Header>
              <Card.Img className="img_center"  src={adminlogo} style={{ width: "60px", height : "60px"}} />
              <Card.Body>
                <Form className="Adminform" method="post" onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com"
                    name="username" value={admin.username} onChange={handleChange} />
                    <div className="input-group mb text-danger">
                   {admin.errors.username}
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password"
                    name="password" value={admin.password} onChange={handleChange} />
                    <div className="input-group mb text-danger">
                    {admin.errors.password}
                    </div>
                  </Form.Group>
                </Form>
                <button className="getstarted_btn" onClick={handleSubmit}>Login</button>
              </Card.Body>
          <p className="mb-1">
         <Link to="admin-forgotpassword">I forgot my password</Link>
       </p>
       <p className="mb-0">
         <Link to="admin-registration" className="text-center">Register a new membership</Link>
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
//         <b>Admin</b>
//         </div>
//         {
//                props.admin.error    
//            }
//     <div className="card">
//     <div className="card-body login-card-body">
//       <p className="login-box-msg">Sign in to start your session</p>
//       <form action="../../index3.html" method="post" onSubmit={handleSubmit}>
//         <div className="input-group mb-3">
//           <input type="email" className="form-control" placeholder="Email"
//           name="username" value={admin.username} onChange={handleChange} />
//           <div className="input-group-append">
//             <div className="input-group-text">
//               <span className="fas fa-envelope" />
//             </div>
//           </div>
//           <div className="input-group mb text-danger">
//             {admin.errors.username}
//           </div>
//         </div>
//         <div className="input-group mb-3">
//           <input type="password" className="form-control" placeholder="Password"
//           name="password" value={admin.password} onChange={handleChange} />
//           <div className="input-group-append">
//             <div className="input-group-text">
//               <span className="fas fa-lock" />
//             </div>
//           </div>
//           <div className="input-group mb text-danger">
//           {admin.errors.password}
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
//             <Button variant="primary" onClick={handleSubmit}>Sign In</Button>
//           </div>
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
//       <p className="mb-1">
//         <Link to="admin-forgotpassword">I forgot my password</Link>
//       </p>
//       <p className="mb-0">
//         <Link to="admin-registration" className="text-center">Register a new membership</Link>
//       </p>
//     </div>
//     {/* /.login-card-body */}
//   </div>
// </div>

// </div>
    // )
// }


const mapStateToProps =(state)=>{
  return {
    auth : state.authReducer,
    admin : state.adminReducer
  }
}

//step 2
const mapDispatchToProps =(dispatch)=>{
  return {
    authenticate : ()=>dispatch(createAuth()),
    createAdmin : (admin)=> dispatch(createAdmin(admin))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin)
