import Profile from "./Profile";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/actions/userActions";
import {connect, ConnectedProps} from "react-redux";

const mapDispatchToProps = {
    logout
}

const mapStateToProps = (state: RootState) => ({
    user: state.allUsers,
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export type ProfilePageProps = ConnectedProps<typeof connector>

export default connector(Profile)