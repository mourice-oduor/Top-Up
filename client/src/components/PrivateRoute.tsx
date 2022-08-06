/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { RootState } from '../redux/store';
import { useAppSelector } from '../redux/hooks/hooks';

const PrivateRoute = ({ component, ...rest }: any): JSX.Element => {
  const user = useAppSelector((state: RootState) => state.user)

  const routeComponent = (props: any) =>
  user.token ? (
      React.createElement(component, props)
    ) : (
      <Navigate to={{ pathname: '/login' }} />
    )
  return <Route exact {...rest} render={routeComponent} />
}

export default PrivateRoute
