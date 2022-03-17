import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {registerCenter} from '../_actions'
import {connect} from 'react-redux'

function CenterRegistration(props) {

  const history = useHistory();
  const [center, setCenter] = useState({
      name : null,
      email_id : null,
      password : null,
      re_type_password : null,
      errors :{
          name : 'Required',
          email_id : 'Required',
          password : 'Required',
          re_type_password : 'Required'
      }
  })

  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const handleChange = (e)=>{
    let name = e.target.name
    let value = e.target.value
    let errors = center.errors

    switch(name){
      case 'name':
        if(value.trim()==''){
          errors.name = 'Required'
          break;
        }
        errors.name = ''
        break;

      case 'email_id':
        if(value.trim()==''){
          errors.email_id = 'Required'
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
          value.length < 6 ? 'Password must be atleast of 6 characters' : ''
          break;
        
        case 're_type_password' :
          errors.re_type_password = 
          value.length < 6 ? 'Password must be same as above' : ''
          break;
    
        }
        setCenter({
          ...center,
          [name] : value,
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

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(validateForm(center.errors)){
      props.registerCenter(center)
      alert('Child-Care Center is successfully registered ! You can log-in now')
    }
    else 
    {
     alert('Registration Falied')
    }
  }
    return (
       
      <div className="hold-transition register-page">
      <div className="register-box">
  <div className="register-logo">
    <b>Center</b>
  </div>
  {
    props.center.center.id>0 &&
    history.push(`/center-login`)
  }
  {
    props.center.error
  }
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Register a new membership</p>
      <form action="../../index.html" method="post" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Full name"
          name="name" value={center.name} onChange={handleChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
          <div className="input-group mb text-danger">
            {center.errors.name}
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" 
          name="email_id" value={center.email_id} onChange={handleChange}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
          <div className="input-group mb text-danger">
            {center.errors.email_id}
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" 
          name="password" value={center.password} onChange={handleChange}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
          <div className="input-group mb text-danger">
            {center.errors.password}
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Retype password" 
          name="re_type_password" value={center.re_type_password} onChange={handleChange}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
          <div className="input-group mb text-danger">
            {center.errors.re_type_password}
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
              <label htmlFor="agreeTerms">
                I agree to the <a href="#">terms</a>
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-success btn-block" onClick={handleSubmit}>Register</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      {/* <div className="social-auth-links text-center">
        <p>- OR -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" />
          Sign up using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" />
          Sign up using Google+
        </a>
      </div> */}
      <Link to="center-login" className="text-center">I already have a membership</Link>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
</div>  
    )
}

//step 1
const mapStateToProps =(state)=>{
  return {
    center : state.centerReducer
  }
}

//step 2
const mapDispatchToProps =(dispatch)=>{
  return {
    registerCenter : (center) =>dispatch(registerCenter(center))
  }
}

//step 3
const connectCenter = connect(mapStateToProps,mapDispatchToProps)

export default connectCenter(CenterRegistration)
