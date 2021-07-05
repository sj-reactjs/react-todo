import React from 'react'
import { Route, Redirect } from 'react-router-dom'
export default function PrivateRoute(routeProps) {
    const { component: Component, auth, ...rest } = routeProps
    return (
        <>
            {auth ? <Route {...rest} render={(props) => <Component {...props} />} /> : <Redirect to='/login' />}
        </>
    )
}
