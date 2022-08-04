import { SetStateAction, SyntheticEvent, useEffect, useState } from 'react'
import FormContainer from '../components/FormContainer'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { register } from "../redux/actions/userActions";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";

const Register = () => {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userRegister = useAppSelector((state) => state.user);
  const { userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      navigate("/login");
    }
  }, [userInfo]);

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault()

    // const RegisterUser = { first_name, last_name, email, password }
    dispatch(register(first_name, last_name, email, password))

  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='firstName' className='my-3'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='firstName'
            placeholder='Enter your first name'
            value={first_name}
            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='lastName' className='my-3'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='lastName'
            placeholder='Enter your last name'
            value={last_name}
            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='email' className='my-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='password' className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit' className='my-3'>
          Submit
        </Button>
      </Form>
    </FormContainer>
  )
}

export default Register