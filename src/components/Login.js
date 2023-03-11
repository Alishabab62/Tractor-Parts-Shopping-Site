import React, { useState } from "react";
import Input from "./Input";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "./Button";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  function handleInputs(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
    console.log(inputs)
  }

  return (
    <div>
      <Header />
      <Navbar />
      <div className="signup-main-wrapper">
        <div className="signup-wrapper">
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
          <Button title={"SUBMIT"} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

