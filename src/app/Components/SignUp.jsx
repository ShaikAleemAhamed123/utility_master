import {useState} from 'react';
import "../styles/loginForm-styles.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signup_loader from "../images/signup_loader.gif"



function SignUp() {
    const [userName,setUserName]=useState();
        const [userHandle,setUserHandle]=useState();
        const [password,setPassword]=useState();
        const [roomNo,setRoomNo]=useState();
        const [isLoading,setIsLoading]=useState(false);
         

const navigate=useNavigate();

    async function submitHandler(event) {
        setIsLoading(true);
        event.preventDefault();
        try{
           const res=await axios.post("https://utility-api.onrender.com/auth/signUp",{userName:userName, userHandle:userHandle,password:password, roomNo:roomNo});
          // console.log(res.data);
           navigate("/login");
        }
        catch(err){
            toast.error('Login failed. Please check your credentials.', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
            console.log("Error, here in the sign up form ", err);
        }
        finally{
            setIsLoading(false);
        }
    }

    return <>
    <div>
    {isLoading && <div className='imgWrapper'> <img className='loading' src={signup_loader} alt="Loading..." /> </div>}
    </div>
        {!isLoading && <form className="my-form my-5" onSubmit={submitHandler}>
            <div className="container">
                <h1>Sign Up</h1>
                <ul>
                    <li className='credentials'> 
                        <label htmlFor="userName">User Name</label>
                        <input type="text" onChange={(e)=>setUserName(e.target.value)} id="user-name" required/>
                    </li>
                    <li className='credentials'> 
                        <label htmlFor="userHandle">User Handle  ( has to be unique )</label>
                        <input type="text" onChange={(e)=>setUserHandle(e.target.value)} id="user-handle" required/>
                    </li>
                    <li className='credentials'>
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} id="password" required/>
                    </li>
                    <li className='credentials'>
                        <label htmlFor="roomNo">Room Number</label>
                        <input type="text" onChange={(e)=>setRoomNo(e.target.value)} id="roomNo" required/>
                    </li>
                    <div className="grid grid-3">
                        <div className="required-msg">REQUIRED FIELDS</div>
                        <button className="btn-grid" type="submit">
                            <span className="back">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt="" /> 
                            </span>
                            <span className="front">SUBMIT</span>
                        </button>
                        <button className="btn-grid" type="reset">
                            <span className="back">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt="" />
                            </span>
                            <span className="front">RESET</span>
                        </button>
                    </div>
                    <li className="my-5">
                        Already have an account. <a href="/login">Log In</a>
                    </li>
                </ul>
            </div>
        </form>
}
    </>
}

export default SignUp;