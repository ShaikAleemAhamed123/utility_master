import React, { useEffect, useState } from "react";
import "../styles/txnPage-styles.css"
import Cookies from "js-cookie";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import txn_loader from  "../images/txn_loader.gif"


function Tnxpage(props) {
    const userName = Cookies.get('username');
    const token = Cookies.get('user_token');

    const [txns, setTxns] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const url = props.endPoint;
        fetchtxnData(url);
    }, []);

    async function fetchtxnData(url) {

        setLoading(true);
    
        const headers = {
            'Authorization': `Bearer ${token}`,
            'userHandle': `${userName}`,
        }
        const params = {
            'tag': "",
        }
        try {
            const res = await axios({
                method: "get",
                url: url,
                params: params,
                headers: headers
            });
            setLoading(false);
            console.log(res.data);
            setTxns(res.data);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching data:", error);
        }
    }    

    const handleTxn = async (txnId, txnType) => {
        try {
            const headers = {
                'Authorization': `Bearer ${token}`,
                'userHandle': `${userName}`,
            };
            if (txnType === "debits") {
                const res = await axios.post("https://utility-api.onrender.com/expense/payExpense", null, {
                    headers,
                    params: {
                        txnId: txnId,
                    },
                });
                console.log(res);
            }
            else {
                const res = await axios.post("https://utility-api.onrender.com/user/paid", null, {
                    headers,
                    params: {
                        txnId: txnId,
                    },
                });
                console.log(res);
            }
            setTxns(prevTxns => prevTxns.filter(txn => txn.id !== txnId));
        } catch (err) {
            console.log("Error, here in the handling pay expense: ", err);
        }
    }

    const txnData = txns.map((txn) => (
        <React.Fragment key={txn.id}>
            <tr>
                <td>{txn.id}</td>
                <td>{txn.amount}</td>
                <td>{txn.tag == null ? "None" : txn.tag}</td>
                <td>{(props.type === "debits" || props.type === "PaidDebits") ? txn.payee : txn.payer}</td>
                {props.txnType === "debits" && (
                    <td>
                        <button type='button' className=" btn btn-secondary rounded btn-sm" onClick={() => handleTxn(txn.id, "debits")}>Pay</button>
                    </td>
                )}
                {props.txnType === "pendingCredits" && (
                    <td>
                        <button type='button' className="btn btn-secondary rounded btn-sm" onClick={() => handleTxn(txn.id, "pending")}>Clear</button>
                    </td>
                )}
            </tr>
        </React.Fragment>
    ));





    return (
        <>
         <ToastContainer />
        <div>
        {loading && (<div className='imgWrapper'> <img className='loading' src={txn_loader} alt="Loading..." /> </div>)}
        {!loading&&(<div className="txn">
            <h1><span className="blue">&lt;</span>Transactions<span className="blue">&gt;</span> <span className="yellow">{props.txnType}</span></h1>
            <h2>For user : @<strong>{props.userHandle}</strong></h2>
            <table className="txn-table">
                <thead>
                    <tr>
                        <th><h1>Tnx Id</h1></th>
                        <th><h1>Amount</h1></th>
                        <th><h1>Tag</h1></th>
                        <th><h1>{(props.type === "debits" || props.type === "PaidDebits") ? "Owe To" : "Lend To"}</h1></th>
                        {props.txnType === "debits" && <th><h1>Cilck to pay</h1></th>}
                        {props.txnType === "pendingCredits" && <th><h1>Cilck to Clear</h1></th>}
                    </tr>
                </thead>
                <tbody>
                    {txnData}
                </tbody>
            </table>
             
        </div>)}
        </div>
        </>
    );
}

export default Tnxpage; 
