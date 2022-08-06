import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import UpdateProfile from "./pages/profile/UpdateProfile";
import Users from "./pages/Users";
// import { string } from "yup";
// import { logout } from "./redux/actions/userActions";
// import { useAppDispatch } from "./redux/hooks/hooks";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`https://reqres.in/api/users/${id}`, {
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include",
  //       mode: "cors",
  //     });

  //     const data = await response.json();
  //     setFirstName(data?.first_name);
  //   })();
  // });

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={ <Profile />} />
            <Route path="/profile/edit" element={<UpdateProfile />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
