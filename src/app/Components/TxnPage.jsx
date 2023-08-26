import "../styles/txnPage-styles.css"

function Tnxpage(props){
    return <>
	<div class="txn">
<h1><span class="blue">&lt;</span>Transactions<span class="blue">&gt;</span> <span class="yellow">{props.txnType}</span></h1>
<h2>For user : @<strong>{props.userHandle}</strong></h2>
<table class="txn-table">
	<thead>
		<tr>
			<th><h1>Tnx Id</h1></th>
			<th><h1>Amount</h1></th>
			<th><h1>Tag</h1></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Google</td>
			<td>9518</td>
			<td>6369</td>
		</tr>
		<tr>
			<td>Twitter</td>
			<td>7326</td>
			<td>10437</td>
		</tr>
		<tr>
			<td>Amazon</td>
			<td>4162</td>
			<td>5327</td>
		</tr>
    <tr>
			<td>LinkedIn</td>
			<td>3654</td>
			<td>2961</td>
		</tr>
    <tr>
			<td>CodePen</td>
			<td>2002</td>
			<td>4135</td>
		</tr>
    <tr>
			<td>GitHub</td>
			<td>4623</td>
			<td>3486</td>
		</tr>
	</tbody>
</table>
	</div>
	</>
	 
     
}

export default Tnxpage;