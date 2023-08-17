import './index.css'


function InputForm() {

    return <>
        <form className="my-form">
            <div className="container">
                <h1>Add Expense</h1>
                <ul>
                    <li>
                        <select>
                            <option selected disabled>---- Please Select an Option ----</option>
                            <option>Water Can</option>
                            <option>Laundry</option>
                            <option>Others</option>
                        </select>
                    </li>
                    <li>
                        <div className="grid grid-2">
                            <input type="text" placeholder="User Name" required />
                            <input type="text" placeholder="Password" required />
                        </div>
                    </li>

                    <li>
                        <input type="text" placeholder="Amount" required />
                    </li>
                    <li>
                        <input type="checkbox" id="terms" />
                        <label for="terms">Equal Split</label>
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