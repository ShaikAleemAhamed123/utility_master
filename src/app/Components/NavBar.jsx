/* eslint-disable jsx-a11y/anchor-is-valid */
import app_logo from '../images/app_logo.png'
import "../styles/navBar-styles.css"
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate=useNavigate();
    const logOut=()=>{
        localStorage.removeItem("user-token");
        return navigate("/login");
    }
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={app_logo} className=" me rounded-circle " alt="Aleem's" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <div className="navbar-toggler-icon"></div>
            </button>
            <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item me-4">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link" href="#">Credits</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link" href="#">Debts</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <button type='button' className="nav-item btn btn-secondary rounded btn-sm" onClick={logOut}>
                        Log Out
                    </button>
                </ul>
            </div>
        </div>
    </nav>
}

export default NavBar;