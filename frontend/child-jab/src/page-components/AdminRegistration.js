import React , {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {connect} from 'react-redux'
import {registerAdmin} from '../_actions'

function AdminRegistration(props) {

  const history = useHistory();
  
  const [admin, setAdmin] = useState({
     full_name : null,
     username : null,
     password : null,
     re_type_password : null,
     errors : {
      full_name : 'Required',
      username : 'Required',
      password : 'Required',
      re_type_password : 'Required'
     }
  })

  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const handleChange = (e)=>{
  let name = e.target.name
  let value = e.target.value
  let errors = admin.errors

  switch(name){
      case 'full_name':
        if(value.trim()==''){
          errors.full_name = 'Required'
          break;
        }
        errors.full_name = ''
        break;

        case 'username':
          if(value.trim()==''){
            errors.username = 'Required'
            break;
          }
          if(!validEmailRegex.test(value)){
            errors.username = 'Email is not valid'
            break;
          }
          errors.username=''
          break;

          case 'password':
            errors.password =
            value.length < 6 ? 'Password must be atleast of 6 characters' : ''
            break;

          case 're_type_password':
            errors.re_type_password =
            value.length < 6 ? 'Password must be same as above' : ''
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

      const handleSubmit = (e)=>{
        e.preventDefault()
       
        if(validateForm(admin.errors)){
          props.registerAdmin(admin)
          alert('Admin is successfully registered ! You can log-in now')
        }
        else {
          alert('Registration Falied')
        }
      }

    return (       
      <div className="hold-transition register-page">
      <div className="register-box">
  <div className="register-logo">
    <b>Admin</b>
  </div>
  {
    props.admin.admin.id>0 &&
    history.push(`/admin-login`)
  }
  {
    props.admin.error
  }
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Register a new membership</p>
      <form action="../../index.html" method="post" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Full name"
          name="full_name" value={admin.full_name} onChange={handleChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
          <div className="input-group mb text-danger">
            {admin.errors.full_name}
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email"
           name="username" value={admin.username} onChange={handleChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
          <div className="input-group mb text-danger">
            {admin.errors.username}
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password"
           name="password" value={admin.password} onChange={handleChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
          <div className="input-group mb text-danger">
            {admin.errors.password}
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Retype password" 
           name="re_type_password" value={admin.re_type_password} onChange={handleChange}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
          <div className="input-group mb text-danger">
            {admin.errors.re_type_password}
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
            <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Register</button>
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
      <Link to="admin-login" className="text-center">I already have a membership</Link>
    </div>
    {/* /.form-box */}
  </div>
</div>
</div>  
    )
}


//step 1
const mapStateToProps =(state)=>{
  return {
    admin : state.adminReducer
  }
}

//step 2
const mapDispatchToProps =(dispatch)=>{
  return {
    registerAdmin : (admin) =>dispatch(registerAdmin(admin))
  }
}

//step 3
const connectCenter = connect(mapStateToProps,mapDispatchToProps)

export default connectCenter(AdminRegistration)
