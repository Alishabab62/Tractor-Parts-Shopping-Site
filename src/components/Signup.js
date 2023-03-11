import React, { useState } from "react";
import Input from "./Input";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "./Button";

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
          <Button title={"SUBMIT"} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

