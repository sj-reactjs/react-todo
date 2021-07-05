import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import TodoApp from './../components/TodoApp'

const Home = () => {
    return (
        <>
            Home Page
        </>
    )
}

const Login = () => {
    return (
        <>
            Login Page
        </>
    )
}

export default function AppRoute() {
    const [auth, setAuth] = React.useState(false)
    console.log('auth', auth);
    return (
        <BrowserRouter>
            <nav>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/app'}>App</Link></li>
                <button onClick={() => setAuth(false)}>Logout</button>
                <button onClick={() => setAuth(authState => !authState)}>Toggle Auth</button>
            </nav>
            <Switch>
                <PublicRoute exact path='/' auth={auth} component={Home} />
                <PublicRoute exact path='/login' auth={auth} component={Login} />
                <PrivateRoute exact path='/app' auth={auth} component={TodoApp} />
                <Route exact path='*' component={() => "404 Page"} />
            </Switch>
        </BrowserRouter>
    )
}
