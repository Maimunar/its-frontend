import React from 'react'
import { Link } from 'react-router-dom'
const RegisterPage = () => {

    return (
        <div className="wishlist-container-small">
            <div className="wishlist-subcontainer">
                <div className="login-form">
                    <h3>Sign Up</h3>
                    <h4>Register a new account</h4>
                    <form>
                        <input type="text" placeholder="username" id="userName" />
                        <input type="text" placeholder="email" id="email" />
                        <input type="password" placeholder="password" id="password" />
                        <input type="submit" value="Login" id="submitBtn" className="login_btn"></input>
                    </form>
                    <div>
                        <Link to="/login" className="link">Allready have an account? Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;