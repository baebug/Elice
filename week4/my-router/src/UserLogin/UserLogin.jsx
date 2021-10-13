import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,
    useHistory,
} from 'react-router-dom';

import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';

const users = [];

export default function UserLogin() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/detail">
                    <UserDetailPage />
                </Route>

                <Route exact path="/register">
                    <RegisterPage />
                </Route>
            </Switch>
        </Router>
    );
}

const HomePage = () => {
    return (
        <div>
            <h2>Welcome to my homepage.</h2>
            <div>
                <Link to="login">Login</Link>
            </div>
        </div>
    );
}

const LoginPage = () => {
    const history = useHistory();
    const handleSubmit = (formData) => {
        const foundUser = users.find(user => user.email === formData.email && user.password === formData.password);

        if (!foundUser) return

        history.push(`/detail?email=${formData.email}&password=${formData.password}`);
    }
    return (
        <div>
            <h2>Login Page</h2>
            <LoginForm onSubmit={handleSubmit} />
            <div>
                <ul>
                    <li>
                        <Link to="/">Back to Home</Link>
                    </li>

                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const UserDetailPage = () => {
    /* queryString 따기? */
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const email = searchParams.get("email");
    const password = searchParams.get("password");

    if (!email || !password) {
        return <Redirect to="/login" />
    }

    return (
        <div>
            <h2>User Detail Page</h2>
            <p>
                <h3>User details</h3>
                <em>{email}</em>
                <br />
                <strong>{password}</strong>
            </p>
            <Link to="/">Logout</Link>
        </div>
    );
}

const RegisterPage = () => {
    const history = useHistory();

    const handleSubmit = (formData) => {
        const foundUser = users.find(user => user.email === formData.email);

        if (foundUser) return alert("이미 등록된 email 입니다.");

        users.push(formData);
        history.push('/login');
    }
    return (
        <div>
            <h2>Register Page</h2>
            <RegisterForm onSubmit={handleSubmit} />
            <div>
                <ul>
                    <li>
                        <Link to="/">Back to Home</Link>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}