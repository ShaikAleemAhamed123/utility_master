import { useState } from 'react';
import "../styles/inputForm-styles.css"
import axios from 'axios';
import Cookies from 'js-cookie';
function InputForm() {
    
    const [equalSplit, setEqualSplit] = useState(false);
    const [tag, setTag] = useState();
    const [amount, setAmount] = useState();
    const [userHandle, setUserHandle] = useState();
    const [splitAmount, setSplitAmount] = useState();
    const [userHandles, setUserHandles] = useState([]);
    const userName=Cookies.get('username');
    const token=Cookies.get('user_token');
    const handleEqualSplitToggle = () => {
        if (!equalSplit) {
            setEqualSplit(true);
        } else {
            setEqualSplit(false);
        }
    };
    const handleSplitUsersAddButton = (e) => {
        e.preventDefault();

        if (equalSplit) {
           const n=userHandles.length+1;
           if (userHandle === "") {
            alert("Enter valid user handle");
        }
        else {
            console.log(userHandle);
            if (amount < 0) {
                alert("Enter valid amount");
            }
            else {
                console.log(amount);
                const am=parseFloat(amount)/n;
                console.log(am);
                
                const alterUsers = userHandles.map((item) => ({
                    ...item,
                    amount: am
                  }));
                const newUserHandles=[...alterUsers,{payer:userHandle,amount:am}];
                
                setUserHandles(newUserHandles);
               
                setUserHandle('');
                setSplitAmount('');
            }
        }
        }
        else {
            if (userHandle === "") {
                alert("Enter valid user handle");
            }
            else {
                console.log(userHandle);
                if (splitAmount < 0) {
                    alert("Enter valid amount");
                }
                else {
                    console.log(splitAmount);
                    const newUserHandles = [...userHandles,{payer:userHandle,amount:splitAmount}];
                   
                    setUserHandles(newUserHandles);
                   
                    setUserHandle('');
                    setSplitAmount('');
                }
            }
        }

    }

    async function submitHandler(event) {
        event.preventDefault();
        try{
          const headers={
            'Authorization': `Bearer ${token}`,
            'userHandle':`${userName}`,
          }
          const newUserHandles=userHandles.map((item)=>({
                ...item,
                "payee":userName,
                "tag":tag
          }));
        //  console.log(token);
          for(var i=0;i<newUserHandles.length;i++){
            console.log(newUserHandles[i]);
            const res=await axios.post("https://utility-server.azurewebsites.net/expense/addExpense",newUserHandles[i],{headers});
            console.log(res);
          }
           
        }
        catch(err){
            console.log("Error, Here in the inputForm ",err);
        }
    }
    const formattedData = userHandles.map((handle, index) => (
        `${handle.payer} - ${handle.amount}`
    )).join('\n');

    return <>
        <form className="my-form" onSubmit={submitHandler}>
            <div className="container">
                <h1>Add Expense</h1>
                <ul>
                    <li>
                        <select value={tag} onChange={(e) => setTag(e.target.value)}>
                            <option value={"Water Can"}>Water Can</option>
                            <option value={"Laundry"}>Laundry</option>
                            <option value={"Others"}>Others</option>
                        </select>
                    </li>
                    <li className='splits'>
                        <input type="checkbox" id="equal-split" onClick={handleEqualSplitToggle} />
                        <label htmlFor="equal-split">Equal Split</label>
                    </li>
                    <li>
                      {equalSplit&&  (<input style={{ display:  "block" }} type='number' onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Amount to be split" required />)}
                    </li>
                    <li>
                        <div className={equalSplit ? "grid grid-2" : "grid grid-3"}>
                            <input id="split-user" onChange={(e) => setUserHandle(e.target.value)} type="text" placeholder="Enter User Handle" />
                         { !equalSplit&&  (<input id="split-amount" onChange={(e) => setSplitAmount(e.target.value)} style={{ display:  "block" }} type="number" placeholder="Split Amount" />)}
                            <button className="btn-grid" onClick={handleSplitUsersAddButton}>
                                <span>Add</span>
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="grid">
                            <textarea id="split-users" value={formattedData} type="text" placeholder="split participants user handles appear here." disabled />
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