import React, {useState, useEffect} from "react";
import { Button, Form, FormGroup, Label, Input, ModalBody, Spinner } from "reactstrap";
import {toggleModal} from '../../redux/action/authAction';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { login } from "../../redux/action/authAction";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, "EMAIL");
  console.log(password, "PASS");

  const isLoading = useSelector(state => state.auth.isLoading);
  const token = useSelector(state => state.auth.token);
  const modalError = useSelector(state => state.auth.modalError);
  // let error = props.error.msg.message;
  // let errorEmail, errorPass;
  // if(props.error.msg.errors !== undefined) {
  //   if(props.error.msg.errors.email !== undefined) {
  //     errorEmail = props.error.msg.errors.email.msg;
  //   }
  //   if(props.error.msg.errors.password !== undefined) {
  //     errorPass = props.error.msg.errors.password.msg;
  //   }
  // }

  let role;
  if(token !== null) {
    role = JSON.parse(atob(token.split('.')[1])).user.id_role;
  };

  const handleSubmitSignin = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(login(user));
  };

  const [showPass, setShowPass] = useState("password");

  console.log(showPass, "SHOW PASS");
  // email validation
  // let emailRegex = /^\w\w*@\w\w*\.[a-z][a-z][a-z]*$/i;
  // let emailTest = emailRegex.test(email);
  // const [showPass, setShowPass] = useState("password");

  return (
    <>
      <ModalBody>
      
        <Form onSubmit={handleSubmitSignin}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <div>
            <Input
             type="email"
             name="email"
             id="email"
             required="required"
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Enter your email"
             required
            />
            </div>
            {/* {emailTest || email === "" ? null : (
              <i className="fas fa-times-circle"></i>
            )}
            {emailTest && email !== "" ? (
              <i
                style={{ color: "#8FBD4B" }}
                className="fas fa-check-circle"
              ></i>
            ) : null} */}
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type={showPass}
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </FormGroup>
          <Button color="light" disabled={isLoading ? 'true' : ''} style={{cursor:`${isLoading ? 'not-allowed' : 'pointer'}`}} title='Sign In'>
              {isLoading ? <Spinner size="sm" color="secondary" /> : <b>Sign In</b>}
            </Button>
            {token ? <Redirect to={'/search'} /> : null}
        </Form>
      </ModalBody>
    </>
  );
};

export default LoginForm;
