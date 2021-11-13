import React from "react";
import Joi from "joi";
import Form from "../common/form";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    email: Joi.string().min(3).max(255).required().label("Email"),
    password: Joi.string().min(5).max(255).required().label("Password"),
  });

  doSubmit = () => {
    console.log(this.state.data);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email Address", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
