import React, { useState } from "react";
import Input from "./Input";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "./Button";
import axios from "axios";
import { Alert } from "@mui/material";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [successHandleAlert , setAlertSuccess]  = React.useState(false)
  const [errorHandleAlert , setAlertError]  = React.useState(false)
  function handleInputs(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }
  async function handleLogin(){
    const data = {
      email: `${inputs.email}`,
      password: `${inputs.password}`,
    };
    const url = "https://tractor.onrender.com/login";
    axios.post(url,data).then((result)=>{
      if(result.status === 200 ){
        setAlertSuccess(true)
        setTimeout(()=>{
          setAlertSuccess(false)
        },3000)
      }
      console.log(result)
    }).catch((error)=>{
      console.log(error)
      if(error.response.status === 400){
        setAlertError(true);
        setTimeout(()=>{
          setAlertError(false)
        },3000)
      }
    })
  }

  return (
    <div>
      <Header />
      <Navbar />
      <div className="signup-main-wrapper">
        <div className="signup-wrapper">
          {successHandleAlert ? <Alert severity="success">Login Successfully</Alert> : ""  }
          {errorHandleAlert ?  <Alert severity="error">Email or Password is incorrect</Alert> : ""}
          <h3>Login Account</h3>
          <Input
            type={"email"}
            placeholder={"Email"}
            name={"email"}
            fun={handleInputs}
          />
          <Input
            type={"password"}
            placeholder={"Password"}
            name={"password"}
            fun={handleInputs}
          />
          <Button title={"SUBMIT"} fun={handleLogin}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

