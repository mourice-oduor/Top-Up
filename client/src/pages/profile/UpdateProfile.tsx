import { useState, useEffect } from "react";
import "./UpdateProfile.css";
import { clearErrors, updateProfile, loadUser } from "../../redux/actions/userActions";
import { UPDATE_PROFILE_RESET } from "../../redux/constants/userConstants";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { RootState } from '../../redux/store';
import { BsFillBriefcaseFill, BsPersonCircle } from 'react-icons/bs';



const UpdateProfile = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [avatar, setAvatar] = useState();
  // const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.user );
  const { error, isUpdated, loading } = useAppSelector((state: RootState) => state.profile);


  const updateProfileSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("firstname", firstname);
    myForm.set("firstname", lastname);
    myForm.set("email", email);
    // myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm));
  };

  // const updateProfileDataChange = (e: { target: { files: Blob[]; }; }) => {
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setAvatarPreview(reader.result);
  //       setAvatar(reader.result);
  //     }
  //   };

  //   reader.readAsDataURL(e.target.files[0]);
  // };

  useEffect(() => {
    if (user) {
      setFirstName(user.firstname);
      setLastName(user.lastname);
      setEmail(user.email);
    }

    if (error) {
      dispatch(clearErrors());
    }

    if (isUpdated) {
      dispatch(loadUser());

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, user, isUpdated]);
  return (
    <div>
      {loading ? (
        loading
      ) : (
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
      )}
    </div>
  );
};

export default UpdateProfile;
