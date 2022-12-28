//implement the styled-components logic here.
import React from "react";

import Button from "./Button";
import Input from "./Input";

function Form() {
  return (
    <form>
      <Input type={"email"} name={"email"} placeholder={"Email"} />
      <Input type={"password"} name={"pass"} placeholder={"Password"} />
      <Button type={"submit"} txt="Send" />
    </form>
  );
}

export default Form;