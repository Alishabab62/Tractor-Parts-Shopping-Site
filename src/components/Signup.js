import React, { useState } from "react";
import Input from "./Input";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "./Button";
import axios from "axios";
import { Alert } from "@mui/material";

export default function Signup() {
  const [inputs, setInputs] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  const [successHandleAlert , setAlertSuccess]  = React.useState(false)
  const [errorHandleAlert , setAlertError]  = React.useState(false)
  const [errorHandleEmptyField , setAlertEmptyFiled]  = React.useState(false)

  async function handleSignUp() {
    if(inputs.fname !== "" && inputs.lname !== "" && inputs.email !== "" && inputs.phone !== "" && inputs.password !==""){
      const data = {
        fname: `${inputs.fname}`,
        mname: `${inputs.mname}`,
        lname: `${inputs.lname}`,
        email: `${inputs.email}`,
        phone: `${inputs.phoneNumber}`,
        dob: `${inputs.dob}`,
        password: `${inputs.password}`,
      };
      console.log(data);
      const url = "https://tractor.onrender.com/signup";
      axios
        .post(url, data)
        .then((res) => {
          console.log(res.status)
          if(res.status === 201){
            setAlertSuccess(true);
          }
          setTimeout(()=>{
            setAlertSuccess(false)
          },3000)
        })
        .catch((error) => {
          if(error.response.data.message === "Email is already registered"){
            setAlertError(true)
          }
          setTimeout(()=>{
            setAlertError(false)
          },3000)
        });
    }
    else{
      setAlertEmptyFiled(true)
      setTimeout(()=>{
        setAlertEmptyFiled(false)
      },2000)
    }
  }

  function handleInputs(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  return (
    <div>
      <Header />
      <Navbar />
      <div className="signup-main-wrapper">
        <div className="signup-wrapper">
          {successHandleAlert ? <Alert severity="success">Account Created Successfully</Alert> : ""  }
          {errorHandleAlert ?  <Alert severity="error">User Already Exists</Alert> : ""}
       
          <h3>Create Account</h3>
          <Input
            type={"text"}
            placeholder={"First Name"}
            name={"fname"}
            fun={handleInputs}
          />
          <Input
            type={"text"}
            placeholder={"Middle Name"}
            name={"mname"}
            fun={handleInputs}
          />
          <Input
            type={"text"}
            placeholder={"Last Name"}
            name={"lname"}
            fun={handleInputs}
          />
          <Input
            type={"email"}
            placeholder={"Email"}
            name={"email"}
            fun={handleInputs}
          />
          <Input
            type={"tel"}
            placeholder={"Phone Number"}
            name={"phoneNumber"}
            fun={handleInputs}
          />
          <Input
            type={"date"}
            placeholder={"Date Of Birth"}
            name={"dob"}
            fun={handleInputs}
          />
          <Input
            type={"password"}
            placeholder={"Password"}
            name={"password"}
            fun={handleInputs}
          />
          <Input
            type={"password"}
            placeholder={"Confirm Password"}
            name={"confirmPassword"}
            fun={handleInputs}
          />
          {errorHandleEmptyField ?  <Alert severity="error" style={{margin:"5px 0px"}}>All Fields Required</Alert> : ""}
          <Button title={"SUBMIT"} fun={handleSignUp} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
