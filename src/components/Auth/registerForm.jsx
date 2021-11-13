import React from "react";
import Joi from "joi";
import Form from "../common/form";
import { register } from "../../services/userService";

class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    name: Joi.string().min(3).max(255).required().label("Name"),
    email: Joi.string().min(3).max(255).required().label("Email"),
    password: Joi.string().min(5).max(255).required().label("Password"),
  });

  doSubmit = async () => {
    try {
      // const { data } = await register(this.state.data);
      const response = await register(this.state.data);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      // this.props.history.push("/");
      window.location = '/';
      // console.log(response);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email Address", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
