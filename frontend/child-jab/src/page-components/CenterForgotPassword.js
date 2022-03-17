/* eslint-disable */
import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { Alert, Card, Container, Form, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { CenterCreateForgot, CenterUpdateForgot } from '../_actions/Forgot.action'

function CenterForgotPassword(props) {
    
    let history = useHistory()
    //validation For Email        
    const [forgot, setforgot] = useState({
        email: null,
        errors: {
            email: ' ',
        }
    })

    // Validation For Otp
    const [validotp, setvalidotp] = useState({
        otp: null,
        errors: {
            otp: ' '
        }
    })

    //validation password & confirm Password
    const [validpass, setvalidpass] = useState({
        password: null,
        cpassword: null,
        errors: {
            password: ' ',
            cpassword: ' '
        }
    })

    // Api Call
    const initialdata = {
        email: '',
        otp: '',
        password: ''
    }
    const [data, setdata] = useState(initialdata)

    //otp generate 
    useEffect(() => {
        props.createForgot.showmail = true
        // setmail(true)
        const min = 1000
        const max = 9999
        var otp = Math.floor(Math.random() * (max - min + 1)) + min //otp generate
        setdata({
            ...data,
            otp
        })
    }, [])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = forgot.errors

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        switch (name) {
            case 'email':
                if (!validEmailRegex.test(value)) {
                    errors.email = 'Please Enter Valid Email-Address.'
                    break
                }
                if (value.trim() == '') {
                    errors.email = '*Required'
                    break
                }
                errors.email = ''
                break
        }

        setforgot({
            ...forgot,
            [name]: value,
            errors
        })
        setdata({
            ...data,
            [name]: value
        })
    }

    const HandleOtp = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = validotp.errors

        switch (name) {
            case 'otp':
                if (value.trim() == '') {
                    errors.otp = '*Required'
                    break
                }
                if (value.length != 4) {
                    errors.otp = 'You Enter Wrong OTP!!! OTP must be 4 Digits'
                    break
                }
                errors.otp = ''
                break
        }
        setvalidotp({
            ...validotp,
            [name]: value,
            errors
        })
    }

    const HandlePass = (e) => {
        let name = e.target.name
        let value = e.target.value
        let errors = validpass.errors

        switch (name) {
            case 'password':
                if (value.trim() == '') {
                    errors.password = '*Required'
                    break
                }
                if (value.length < 8) {
                    errors.password = 'Password is To Short...!'
                    break
                }
                errors.password = ''
                break
            case 'cpassword':
                if (value.trim() == '') {
                    errors.cpassword = '*Required'
                    break
                }
                if (value.length < 8) {
                    errors.cpassword = 'Password is To Short...!'
                    break
                }
                if (value !== validpass.password) {
                    errors.cpassword = 'Password Not Match...!'
                    break
                }
                errors.cpassword = ''
                break
        }
        setvalidpass({
            ...validpass,
            [name]: value,
            errors
        })

        setdata({
            ...data,
            [name]: value
        })
    }   

    const validationForm = (errors) => {
        let valid = true
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        )
        return valid;
    }

    const EmailSubmit = (e) => {
        e.preventDefault()
        if (validationForm(forgot.errors)) {
            alert('Form Submited')
            //otp send call
            props.forgotPass(data)
            setShow(true)
            MessageTime()
            setmail(false)
        } else {
            alert("Please Fill Proper Form")
        }
    }

    const OtpSubmit = (e) => {
        e.preventDefault()
        if (validationForm(validotp.errors)) {
            alert('Form Submited')
            if (validotp.otp == data.otp) {
                setpass(true)
                props.createForgot.showOtp=false
            } else {
                setpass(false)
                alert('not match')
            }
            
        } else {
            alert("Please Fill Proper Form")
        }
    }

    const PassSubmit = (e) => {
        e.preventDefault()
        if (validationForm(validpass.errors)) {
            alert('Form Submited')
            props.editpass(data)
            setShow(true)
            MessageTime()
            history.push('/center-login')
        } else {
            alert("Please Fill Proper Form")
        }
    }

    //email
    const [mail, setmail] = useState(false)
    //message 
    const [show, setShow] = useState(false)
    //password
    const [pass, setpass] = useState(false)

    //Alert Message timing 
    const MessageTime = () => {
        setTimeout(() => {
            setShow(false)
        }, 10000)
    }

    return (
        <>
            {show && <Alert className='pb-0' variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{props.createForgot.msg}{props.createForgot.error}</p>
            </Alert>
            }
            <div className="content-header MainPage hold-transition login-page login-box">
    
       <div className="row mb-6">
       
             <div className="container-fluid container_first">
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Container>
                        <Row>
                            <Col>
                    <Card className="card" style={{ width: "30rem"}} align="center">
                    <Card.Header><h2>Forgot Password</h2></Card.Header>
                    <Form>
                       
                        {props.createForgot.showmail && <div>
                            <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" value={data.email} onChange={handleChange} name="email" placeholder="Enter Your Email" />
                                <div style={{ color: '#f50000' }}>{forgot.errors.email}</div>
                            </Form.Group>
                            <br></br>
                            <Button type="submit" onClick={EmailSubmit} block variant="dark">Submit</Button> <br></br>
                        </div>}

                        {props.createForgot.showOtp && <div>
                               <Form.Group>
                                <Form.Label>Enter OTP</Form.Label>
                                <Form.Control type="number" onChange={HandleOtp} name="otp" placeholder="Enter OTP" />
                                <div style={{ color: '#f50000' }}>{validotp.errors.otp}</div>
                                </Form.Group> <br></br>
                            <Button type="submit" onClick={OtpSubmit} block variant="dark">Submit</Button> <br></br>
                        </div>}

                        {pass && <div>
                            <div className="form-group">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={HandlePass} name='password' placeholder="Enter password" />
                                <div style={{ color: '#f50000' }}>{validpass.errors.password}</div>
                            </div>

                            <div className="form-group">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" onChange={HandlePass} name='cpassword' placeholder="Enter Confirm password" />
                                <div style={{ color: '#f50000' }}>{validpass.errors.cpassword}</div>
                            </div>
                            <Button type="submit" onClick={PassSubmit} block variant="dark">Submit</Button>
                        </div>
                        }
                        <p className="forgot-password text-right">
                            Back To <Link to='/center-login'>Sign In?</Link>
                        </p>
                    </Form>
                    </Card>
                    </Col>
                    </Row>
                    </Container>
                </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        createForgot: state.ForgotReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        forgotPass: (data) => dispatch(CenterCreateForgot(data)),
        editpass: (data) => dispatch(CenterUpdateForgot(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CenterForgotPassword)
