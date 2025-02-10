import {useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./login-components/LoginForm";
import AuthContext from "../../context/authContext";
import Api from "../../api-utility/Api";
import './LoginPageStyles.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const {auth, setAuth} = useContext(AuthContext);
    const [error, setError] = useState(null);

    const login = async (user) => {
        try {
            const result = await Api.login(user);
            if(result === 'OK') {
                setAuth({
                    isAuthenticated: true,
                    user: user
                });
            }
            auth.isAuthenticated = true && navigate('/search');
        } catch (err) {
            console.error('LoginPage login error', err);
            setError(err);
        }
    };

    return (
        <div className="login-page-container">
            <LoginForm login={login} />
            {error && 
                <div className="login-page-error">
                    <p>{error}</p>
                </div>
            }
        </div>
    )
};

export default LoginPage;
