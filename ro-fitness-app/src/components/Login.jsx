<<<<<<< HEAD
import React,{Component} from 'react'
import {Form, FormGroup,Input,Button}from "reactstrap"


=======
import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
>>>>>>> e80d4d7ccc50d854b2005bd54331ed828a98ccf2

class Login extends Component {
  render() {
    return (
      <Form className="login-form">
<<<<<<< HEAD
         <h2 className="text-center">Ro</h2>
         <span className="font-weight-bold"><h5 className="text-center">Fitness</h5></span>
         <FormGroup>
           {/* <Label>Email</Label> */}
           <Input type="username" className="text-center"placeholder="Username"></Input>
         </FormGroup>
         <FormGroup>
           {/* <Label>Email</Label> */}
           <Input type="Password" className="text-center"placeholder="Password"></Input>
         </FormGroup>
         <Button className="btn-lg hello btn-block">Log In</Button>
  
         <div className="text-center pt-2">Remember me
         </div>
        
          <div className="text-center">
           <a href ="/sign-up">Create New Account</a>
           <span className ="p-2">|</span>
           <a href ="/forgot-password">Forgot Password ?</a>
         </div>
=======
        <h2 className="text-center">Ro</h2>
        <span className="font-weight-bold">
          <h5 className="text-center">Fitness</h5>
        </span>
        <FormGroup>
          {/* <Label>Email</Label> */}
          <Input
            type="username"
            className="text-center"
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup>
          {/* <Label>Email</Label> */}
          <Input
            type="Password"
            className="text-center"
            placeholder="Password"
          />
        </FormGroup>
        <Button className="btn-lg hello btn-block">Log In</Button>

        <div className="text-center pt-2">Remember me</div>

        <div className="text-center">
          <a href="/sign-up">Create New Account</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password ?</a>
        </div>
>>>>>>> e80d4d7ccc50d854b2005bd54331ed828a98ccf2
      </Form>
    );
  }
}
export default Login;
