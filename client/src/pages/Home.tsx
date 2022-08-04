import React from 'react'
import { useAppSelector } from "../redux/hooks/hooks";


const userLogin = useAppSelector((state) => state.user);
const { userInfo }  = userLogin

const firstName = userInfo ? userInfo?.first_name : null

function Home() {
  return firstName ? (
    <h1>Welcome {firstName}!</h1>
  ) : (
    <h2>Welcome to the Home Page!</h2>
  )
}

export default Home