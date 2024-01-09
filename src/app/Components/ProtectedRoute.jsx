import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        
        const userToken = Cookies.get('user_token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <>
            {
                isLoggedIn ? props.children : null
            }
        </>
    );
}
export default ProtectedRoute;