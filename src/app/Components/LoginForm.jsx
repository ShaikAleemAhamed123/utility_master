import "../styles/loginForm-styles.css"

function LoginForm() {



    function submitHandler(event) {
        event.preventDefault();
        const amount = document.querySelector("#amount").value;
        if (amount < 0) {
            alert("Enter Positive Amount");
        }
        else {
            // TODO Submit the Form to the server !
            const form = event.target;
            form.reset();
        }
    }

    return <>
        <form className="my-form" onSubmit={submitHandler}>
            <div className="container">
                <h1>Log In</h1>
                <ul>
                    <li className='credentials'>
                        <label htmlFor="userHandle">User Handle</label>
                        <input type="text" id="user-handle" required/>
                    </li>
                    <li className='credentials'>
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" required/>
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
                </ul>
            </div>
        </form>
    </>
}

export default LoginForm;