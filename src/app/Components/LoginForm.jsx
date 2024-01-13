import { useState } from 'react';
import "../styles/loginForm-styles.css"
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom/dist';

function LoginForm() {
    const [userHandle, setUserHandle] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false); // Added loading state

    const navigate = useNavigate();

    async function submitHandler(event) {
        event.preventDefault();
        try{
           const res=await axios.post("https://utility-api.onrender.com/auth/signIn",{userHandle:userHandle,password:password});
          // console.log(res.data);
           const token=res.data;
           Cookies.set('user_token', token, { expires: 30 });
           Cookies.set('username',userHandle,{expires:30});
           navigate("/");
        }
        catch(err){
            console.log("Error, here in the login form ", err);
        } finally {
            setIsLoading(false); // Set loading state back to false after request is done
        }
    }

    return (
        <>
            <form className="my-form my-5" onSubmit={submitHandler}>
                <div className="container">
                    <h1>Log In</h1>
                    <ul>
                        <li className='credentials'>
                            <label htmlFor="userHandle">User Handle</label>
                            <input type="text" onChange={(e) => setUserHandle(e.target.value)} id="user-handle" required />
                        </li>
                        <li className='credentials'>
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" required />
                        </li>
                        <div className="grid grid-3">
                            <div className="required-msg">REQUIRED FIELDS</div>
                            <button className="btn-grid" type="submit" disabled={isLoading}>
                                {isLoading ? (
                                    <span>Loading...</span>
                                ) : (
                                    <>
                                        <span className="back">
                                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt="" />
                                        </span>
                                        <span className="front">SUBMIT</span>
                                    </>
                                )}
                            </button>
                            <button className="btn-grid" type="reset">
                                <span className="back">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt="" />
                                </span>
                                <span className="front">RESET</span>
                            </button>
                        </div>
                        <li className="my-5">
                            Do not have an account. <a href="/signup">Sign Up</a>
                        </li>
                    </ul>
                </div>

            </form>

        </>
    );
}

export default LoginForm;
