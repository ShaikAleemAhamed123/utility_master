import './index.css'


function InputForm() {

    const [equalSplit, setEqualSplit] = ["", () => {
        if (document.querySelector("#equal-split").checked) {
            const unequal_splits = document.querySelectorAll(".unequal-splits input");
            for (const split of unequal_splits) {
                split.checked = false;
            }
            document.querySelector(".unequal-splits").style.visibility = "hidden";
        }
        else {
            document.querySelector(".unequal-splits").style.visibility = "visible";
        }
    }];

    function submitHandler(event) {
        event.preventDefault();
        const amount = document.querySelector("#amount").value;
        if (amount < 0) {
            alert("Enter Positive Amount");
        }
        else {
            const inputs = document.querySelectorAll('.splits input');
            let splits = false;
            for (const input of inputs) {
                if (input.checked) {
                    splits = true;
                    break;
                }
            }
            if (!splits) {
                alert("Select atleast one split option");
            }
            else {
                // submit the form
                const form = event.target;
                form.reset();
            }
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
                    <li>
                        <div className="grid grid-2">
                            <input type="text" placeholder="User Name" required />
                            <input type="text" placeholder="Password" required />
                        </div>
                    </li>

                    <li>
                        <input type='number' id="amount" placeholder="Amount" required />
                    </li>
                    <li class='splits'>
                        <input type="checkbox" id="equal-split" onClick={setEqualSplit} />
                        <label htmlFor="equal-split">Equal Split</label>
                    </li>
                    <li class='splits'>
                        <div className="unequal-splits grid grid-3">
                            <input type="checkbox" id="aleem" />
                            <label htmlFor="aleem">Aleem</label>
                            <input type="checkbox" id="vamshi" />
                            <label htmlFor="vamshi">Vamshi</label>
                            <input type="checkbox" id="sai" />
                            <label htmlFor="sai">Sai</label>
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