//implement the styled-components logic here.
import React from "react";

import Button from "./Button";
import Input from "./Input";
import "./styles.css";

function Form() {
  return (
    <form>
      <Input className="input" type={"email"} name={"email"} placeholder={"Email"} />
      <Input className="input" type={"password"} name={"pass"} placeholder={"Password"} />
      <Button className="button" type={"submit"} txt="Send" />
    </form>
  );
}

export default Form;