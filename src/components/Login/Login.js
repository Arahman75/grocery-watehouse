import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleEmailBlur=(event)=>{
    setEmail(event.target.value);
}
const handlePasswordBlur=(event)=>{
    setPassword(event.target.value);
}
    const handleFormSubmit = (event) =>{
event.preventDefault();
    }
    return (
        <div className='login-form'>
            <h2 className='login-title'>Please login</h2>
            <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
      </Form.Group>
      <h4>Are you new user? <Link to="/register">Please Register</Link></h4>
      <Button variant="primary" type="submit">
      Login
      </Button>
    </Form>
        </div>
    );
};

export default Login;