import { useEffect, useState } from 'react'
import { register } from "../redux/actions/userActions";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { RootState } from "../redux/store";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface IUser {
  id?: any | null,
  email: string,
  password: string,
}

function Register() {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [successful, setSuccessful] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const dispatch = useAppDispatch();

  const userRegister = useAppSelector((state: RootState) => state.user);
  const { userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
    }
  }, [userInfo]);

  const initialValues: IUser = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 8 and 20 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
  });

  const submitHandler = async (formValue: IUser) => {
    const { email, password } = formValue;
    
    setMessage(message);
    setSuccessful(true);
    dispatch(register(email, password))
  }

  return (
    <div className="col-md-12">
      <h2>Sign Up</h2>
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
          width={100}
          height={80}
          style={{margin: 'auto', paddingTop: '10px'}}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          <Form>
            {!successful && (
              <div>
                <div className="form-group m-3">
                  <label htmlFor="email"> Email </label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group m-3">
                  <label htmlFor="password"> Password </label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group m-3">
                  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group">
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Register