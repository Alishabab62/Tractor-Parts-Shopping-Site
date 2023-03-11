import React from "react";
import Button from "./Button";
import Logo from "./Logo";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Logo />
      <div className="right-header">
        <Link to={"/login"}>
          <Button title={"Login"} />
        </Link>

        <Link to={"/signup"}>
          <Button title={"Sign Up"} />
        </Link>
      </div>
    </header>
  );
}
