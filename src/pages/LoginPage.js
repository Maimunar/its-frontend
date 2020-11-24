import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {

    return (

        <div className="wishlist-container-small">
            <div className="wishlist-subcontainer">
                <div className="login-form">
                    <h3>Sign In</h3>
                    <h4>Log In To Your Account</h4>
                    <form>
                        <input type="text" placeholder="username" id="userName" />
                        <input type="password" placeholder="password" id="password" />
                        <input type="submit" value="Login" id="submitBtn" className="login_btn"></input>
                    </form>
                    <div>
                        <Link to="/register" className="link">Don't have an account? Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;