import { SyntheticEvent, useEffect, useState } from 'react'
import FormContainer from '../components/FormContainer'
import { Form, Button } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom';
import { register } from "../redux/actions/userActions";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { RootState } from "../redux/store";

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch();

  const userRegister = useAppSelector((state: RootState) => state.user);
  const { userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
    }
  }, [userInfo]);

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault()

    dispatch(register( email, password))

  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>

        <Form.Group controlId='email' className='my-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e : any ) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='password' className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
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