import React, { useEffect, useState } from "react";
import "../styles/txnPage-styles.css"
import Cookies from "js-cookie";
import axios from "axios";

function Tnxpage(props) {
    const userName = Cookies.get('username');
    const token = Cookies.get('user_token');

    const [txns, setTxns] = useState([]);

    useEffect(() => {
        const url = props.endPoint;
        fetchtxnData(url);
    }, []);

    async function fetchtxnData(url) {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'userHandle': `${userName}`,
        }
        const params = {
            'tag': "",
        }
        const res = await axios({
            method: "get",
            url: url,
            params: params,
            headers: headers
        }).then((data) => {
            //console.log(data.data);
            setTxns(data.data);
        });
    }
  const handleTxn=async()=>{
	try{

	}
	catch(err){
		console.log("Error: ", err);
	}
  }
    const txnData = txns.map((txn) => (
        <React.Fragment key={txn.id}>
            <tr>
                <td>{txn.id}</td>
                <td>{txn.amount}</td>
                <td>{txn.tag == null ? "None" : txn.tag}</td>
                <td>{props.type === "credits" ? txn.payer : txn.payee}</td>
                {props.type === "debits" && (
                    <td>
                        <input type="checkbox" onClick={handleTxn}/>
                    </td>
                )}
            </tr>
        </React.Fragment>
    ));

    return (
        <div className="txn">
            <h1><span className="blue">&lt;</span>Transactions<span className="blue">&gt;</span> <span className="yellow">{props.txnType}</span></h1>
            <h2>For user : @<strong>{props.userHandle}</strong></h2>
            <table className="txn-table">
                <thead>
                    <tr>
                        <th><h1>Tnx Id</h1></th>
                        <th><h1>Amount</h1></th>
                        <th><h1>Tag</h1></th>
                        <th><h1>{props.type === "debits" ? "Owe To" : "Lend To"}</h1></th>
                        {props.type === "debits" && <th>Checkbox</th>}
                    </tr>
                </thead>
                <tbody>
                    {txnData}
                </tbody>
            </table>
        </div>
    );
}

export default Tnxpage;
