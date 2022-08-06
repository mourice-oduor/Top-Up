import { useEffect } from "react";
import {
  getAllUsers,
  updateUser,
  deleteUser,
} from "../redux/actions/userActions";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { RootState } from "../redux/store";
import { BsPencil, BsTrash } from "react-icons/bs";

const Users = () => {

  const dispatch = useAppDispatch();

  const usersState = useAppSelector((state: RootState) => state.user);
  const {users}  = usersState;

  useEffect(() => {
    dispatch(getAllUsers());
  }, [users]);

  return (
    <div>
      <h4> Total Users - {users.length}</h4>
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          { users &&
            users.map(
              (user: {
                id: any;
                first_name: string;
                last_name: string;
                email: string;
              }) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>
                      <BsPencil
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(updateUser(user.id, { user }));
                        }}
                      />
                    </td>
                    <td>
                      <BsTrash
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(deleteUser(user.id));
                        }}
                      />
                    </td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
