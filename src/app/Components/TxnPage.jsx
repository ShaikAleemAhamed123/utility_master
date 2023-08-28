import React,{ useEffect, useState } from "react";
import "../styles/txnPage-styles.css"
import Cookies from "js-cookie";
import axios from "axios";

function Tnxpage(props) {

	const userName = Cookies.get('username');
	const token = Cookies.get('user_token');

	const [txns, setTxns] = useState([]);

	useEffect( () => {
		const url = props.endPoint;
		fetchtxnData(url);
	},[]);

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
			console.log(data.data);
			setTxns(data.data);
		});
	}

	const txnData = txns.map((txn) => (
		<React.Fragment key={txn.id}>
		  <tr>
			<td>{txn.id}</td>
			<td>{txn.amount}</td>
			<td>{props.type === "credits" ? txn.payer : txn.payee}</td>
			<td>{txn.tag}</td>
		  </tr>
		</React.Fragment>
	  ));
	  
	return <>
		<div className="txn">
			<h1><span className="blue">&lt;</span>Transactions<span className="blue">&gt;</span> <span className="yellow">{props.txnType}</span></h1>
			<h2>For user : @<strong>{props.userHandle}</strong></h2>
			<table className="txn-table">
				<thead>
					<tr>
						<th><h1>Tnx Id</h1></th>
						<th><h1>Amount</h1></th>
						<th><h1>Tag</h1></th>
						<th><h1>{props.type == "debits" ? "Owes To" : "Lend To"}</h1></th>
					</tr>
				</thead>
				<tbody>
					{
						txnData 
					}
				</tbody>
			</table>
		</div>
	</>


}

export default Tnxpage;