import { useAppSelector } from "../redux/hooks/hooks";
import { RootState } from '../redux/store';

const userLogin = useAppSelector((state: RootState) => state.user );
const { userInfo }  = userLogin

const firstName = userInfo ? userInfo?.first_name : null

function Home() {
  return firstName ? (
    <h1>Welcome {firstName}</h1>
  ) : (
    <h1>Welcome to the Home Page!</h1>
  )
  // return(
  //   <div>
  //     <h1>Welcome to the Home Page!</h1>
  //   </div>
  // )
}

export default Home