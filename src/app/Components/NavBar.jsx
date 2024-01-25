/* eslint-disable jsx-a11y/anchor-is-valid */
import app_logo from '../images/app_logo.png'
import "../styles/navBar-styles.css"
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {
    const navigate = useNavigate();
    const logOut = () => {
        Cookies.remove('user_token');
        Cookies.remove('username');
        return navigate("/login");

    }
    const token = Cookies.get("user_token");
    const userName = Cookies.get("username");
    const handleCredits = async () => {
        try {
            const headers = {
                'Authorization': `Bearer ${token}`,
                'userHandle':`${userName}`,
              }
              const res=await axios.get("https://utility-api.onrender.com/ledger/credits",{headers});
              console.log(res);
            }
           catch(err){
            console.log("Error, here in the handling credits: ",err);
           }
    }
    const handleDebts=async ()=>{
        try{
         const headers={
             'Authorization': `Bearer ${token}`,
             'userHandle':`${userName}`,
           }
           const res=await axios.get("https://utility-api.onrender.com/ledger/debts",{headers});
           console.log(res);
         }
        catch(err){
         console.log("Error, here in the handling debts: ",err);
        }
    }
     
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src={app_logo} className=" me rounded-circle " alt="Aleem's" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <div className="navbar-toggler-icon"></div>
            </button>
            <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item me-4">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link" href="/credits" onClick={handleCredits}>Credits</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link" href="/debts" onClick={handleDebts}>Debts</a>
                    </li>
                    <NavDropdown title="Pending" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/pendingCredits">Pending Credits</NavDropdown.Item>
                        <NavDropdown.Item href="/pendingDebits">
                            Pending Debts
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="History" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/received">Received Credits</NavDropdown.Item>
                        <NavDropdown.Item href="/paid">
                            Paid Debts
                        </NavDropdown.Item>
                    </NavDropdown>
                    <li className="nav-item me-4">
                        <a className="nav-link" href="/about">About</a>
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