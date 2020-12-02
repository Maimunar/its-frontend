import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Navbar = ({ match, userType, ...props }) => {
    const history = useHistory()

    const [activePages, setActivePages] = useState(['', '', '', ''])

    const toggleActivePage = (path) => {
        switch (path) {
            case '/':
                setActivePages(['active-page', '', '', ''])
                break;
            case '/wishlist':
                setActivePages(['', 'active-page', '', ''])
                break;
            case '/admin':
                setActivePages(['', '', 'active-page', ''])
                break;
            case '/login':
                setActivePages(['', '', '', 'active-page'])
                break;
            default: {
                setActivePages(['', '', '', '']);
                break;
            }
        }
    }
    /*
        This makes use of the router's history to track the active button on every uri change
    */
    useEffect(() => {
        return history.listen((location) => {
            toggleActivePage(location.pathname)
            console.log(`You changed the page to: ${location.pathname}`)
        })
    }, [history])

    const toggleActive = () => {
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];
        navbarLinks.classList.toggle('active')
    }

    return (
        <nav className="navbar">
            <div className="brand-name">Impericion - Band Merch</div>
            <button onClick={() => toggleActive()} className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <div className="navbar-links">
                <ul>
                    <li>
                        <Link to="/" className={activePages[0]}>Browse</Link>
                    </li>

                    {localStorage.getItem('token') ?
                        <li>
                            <Link to="/wishlist" className={activePages[1]}>Wishlist</Link>
                        </li>
                        : ''}

                    {/* Check for an admin, comment out for testing purposes
                        TODO: Remove Comments
                    */}
                    {/* {userType === 'admin' ? */}
                    <li>
                        <Link to="/admin" className={activePages[2]}>Admin Panel</Link>
                    </li>
                    {/* :''} */}

                    <li>
                        {localStorage.getItem('token') ?
                            <Link to="/logout" className={activePages[3]}>Logout</Link> :
                            <Link to="/login" className={activePages[3]}>Login</Link>
                        }

                    </li>
                </ul>
            </div>
        </nav>
    )
}



export default Navbar