import { SetStateAction, SyntheticEvent, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { login } from "../redux/actions/userActions";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { RootState } from '../redux/store';

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useAppSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();

  const { userInfo } = userLogin
  useEffect(() => {
    if (userInfo !== undefined && userInfo) {
      console.log(userInfo);
    }
  }, [userInfo]);

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(login(email, password ));
  };

  return (
    <FormContainer>
      <h1>Login</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setEmail(e.target.value)
            }
          />
        </Form.Group>

        <Form.Group controlId="password" className="my-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setPassword(e.target.value)
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="my-3">
          Login
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Login;
