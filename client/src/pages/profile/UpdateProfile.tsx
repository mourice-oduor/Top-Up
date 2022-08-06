import { useState, useEffect } from "react";
import "./UpdateProfile.css";
import { updateProfile } from "../../redux/actions/userActions";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { RootState } from '../../redux/store';
import { BsFillBriefcaseFill, BsPersonCircle } from 'react-icons/bs';



const UpdateProfile = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.user );

  const updateProfileSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("firstname", firstname);
    myForm.set("firstname", lastname);
    myForm.set("email", email);

    dispatch(updateProfile(myForm));
  };

  useEffect(() => {
    if (user) {
      setFirstName(user.firstname);
      setLastName(user.lastname);
      setEmail(user.email);
    }

  }, [dispatch, user]);
  return (
    <div>
      <div>
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Update Profile</h2>

              <form
                className="updateProfileForm"
                encType="multipart/form-data"
                onSubmit={updateProfileSubmit}
              >
                <div className="updateProfileName">
                  <BsPersonCircle />
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    name="first_name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="updateProfileName">
                  <BsPersonCircle />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    name="last_name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <BsFillBriefcaseFill />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  value="Update"
                  className="updateProfileBtn"
                />

              </form>
            </div>
          </div>
        </div>
    </div>
  );
};

export default UpdateProfile;
