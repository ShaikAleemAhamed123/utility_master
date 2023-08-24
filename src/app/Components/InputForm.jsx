import { useState } from 'react';
import "../styles/inputForm-styles.css"

function InputForm() {

    const [equalSplit, setEqualSplit] = useState(false);

    const handleEqualSplitToggle = () => {
        if (!equalSplit) {
            setEqualSplit(true);
        } else {
            setEqualSplit(false);
        }
    };

    const [splitUsers, setSplitUsers] = useState("");

    const handleSplitUsersAddButton = (e) => {
        e.preventDefault();
        const user = document.querySelector("#split-user").value;
        let amount = -1;
        if (equalSplit) {
            amount = document.querySelector("#amount").value;
        }
        else {
            amount = document.querySelector("#split-amount").value;
        }

        if (user === "") {
            alert("Enter valid user handle");
        }
        else {
            console.log(user);
            if (amount < 0) {
                alert("Enter valid amount");
            }
            else {
                console.log(amount);
                setSplitUsers(splitUsers + (splitUsers!=="" ? "; " : "") + user + " - " + amount);
                document.querySelector("#split-users").innerHTML = splitUsers;
            }
        }

    }

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
                <h1>Add Expense</h1>
                <ul>
                    <li>
                        <select>
                            <option>Water Can</option>
                            <option>Laundry</option>
                            <option>Others</option>
                        </select>
                    </li>
                    <li className='splits'>
                        <input type="checkbox" id="equal-split" onClick={handleEqualSplitToggle} />
                        <label htmlFor="equal-split">Equal Split</label>
                    </li>
                    <li>
                        <input style={{ display: equalSplit ? "block" : "None" }} type='number' id="amount" placeholder="Amount to be split" required />
                    </li>
                    <li>
                        <div className={equalSplit ? "grid grid-2" : "grid grid-3"}>
                            <input id="split-user" type="text" placeholder="Enter User Handle" />
                            <input id="split-amount" style={{ display: equalSplit ? "none" : "block" }} type="number" placeholder="Split Amount" />
                            <button className="btn-grid" onClick={handleSplitUsersAddButton}>
                                <span>Add</span>
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="grid">
                            <textarea id="split-users" value={splitUsers} type="text" placeholder="split participants user handles appear here." disabled />
                        </div>
                    </li>
                    <li>
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
                    </li>
                </ul>
            </div>
        </form>
    </>
}

export default InputForm;