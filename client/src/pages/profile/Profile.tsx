import { Button } from "react-bootstrap";
import { ProfilePageProps } from "./index";
import { getCurrentUser } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";
// import "./Profile.css";

function Profile() {
  // const { logout } = props;
  const currentUser = getCurrentUser();

  return (
    <div className="profileContainer">
      <div className="m-5 p-2">
        <h1>My Profile</h1>
        {/* currentUser?.data?.avatar?.url */}
        <img
          src={"https://reqres.in/img/faces/2-image.jpg"}
          alt={currentUser?.data?.first_name}
          style={{ display: "block", width: "30vh", height: 'auto', margin: '5%' }}
        />
        <Link to="/profile/edit">Edit Profile</Link>
      </div>
      {/* <header className="jumbotron">
        <h3>
          <strong>{currentUser?.email}</strong> Profile
        </h3>
      </header> */}

      <div>
        <div>
          <h4>Full Name</h4>
          <p>{currentUser.first_name}</p>
          <p>{currentUser.last_name}</p>
        </div>
        <div>
          <h4>Email</h4>
          <p>{currentUser.email}</p>
        </div>

        {/* <p>
          <strong>Token:</strong> {currentUser?.accessToken.substring(0, 20)} ...{" "}
          {currentUser?.accessToken.substr(currentUser?.accessToken.length - 20)}
        </p> */}
        <p>
          <strong>Id:</strong> {currentUser?.id}
        </p>

      </div>
      

      {/* <Button className="mb-5" color="primary" onClick={() => logout()}>
        {" "}
        Sign Out
      </Button> */}
    </div>
  );
}

export default Profile;
