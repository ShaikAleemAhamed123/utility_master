import { useState } from 'react'
import './index.css'


function InputForm() {

    const [equalSplit, setEqualSplit] = useState(false);

    function checkBoxChangeHandler() {
        setEqualSplit(!equalSplit);
    }



    return <>
        <form className="my-form">
            <div className="container">
                <h1>Add Expense</h1>
                <ul>
                    <li>
                        <select title="select expense type" required>
                            <option defaultValue={true} disabled>-- Please choose an option --</option>
                            <option>Water Can</option>
                            <option>Laundry</option>
                            <option>Other</option>
                        </select>
                    </li>
                    <li>
                        <div className="grid">
                            <input type="text" placeholder="Enter Amount" required />
                        </div>
                    </li>
                    <li>
                        <div className="grid grid-2">
                            <input type="text" placeholder="UserName" required />
                            <input type="text" placeholder="Password" required />
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="split" defaultChecked={equalSplit} onClick={checkBoxChangeHandler} placeholder='equal split ?' />
                        <label htmlFor="equalSplit">Equal Split</label>
                    </li>
                    <li>
                        <div className="grid grid-3">
                            <div className="required-msg">REQUIRED FIELDS</div>
                            <button className="btn-grid" type="submit"  >
                                <span className="back">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt="" />
                                </span>
                                <span className="front">SUBMIT</span>
                            </button>
                            <button className="btn-grid" type="reset"  >
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