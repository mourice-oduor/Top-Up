import { getCurrentUser } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";

function Profile() {
  const currentUser = getCurrentUser();

  return (
    <div className="profileContainer">
      <div className="m-5 p-2">
        <h1>My Profile</h1>
        <img
          src={currentUser?.avatar?.url}
          alt={currentUser?.first_name}
          style={{ display: "block", width: "30vh", height: 'auto', margin: '5%' }}
        />
        <Link to="/profile/edit">Edit Profile</Link>
      </div>

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

        <p>
          <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
          {currentUser.token.substr(currentUser?.token.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser?.id}
        </p>

      </div>
    </div>
  );
}

export default Profile;
