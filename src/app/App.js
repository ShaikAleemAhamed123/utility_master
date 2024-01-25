import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import InputForm from './Components/InputForm'
import About from './Components/About'
import './App.css'
import LoginForm from './Components/LoginForm'
import Txnpage from './Components/TxnPage'
import SignUp from './Components/SignUp'
import ProtectedRoute from './Components/ProtectedRoute'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Cookies from 'js-cookie'

function App() {
    const loggedInUser = Cookies.get('username');
    return <>
        <Router>
            <div className="app-wrapper">
                <div className="main-content">
                    <Routes>
                        <Route exact path="/" element={
                            <ProtectedRoute>
                                <NavBar />
                                <InputForm />
                            </ProtectedRoute>
                        } />
                        <Route exact path="/signup" element={
                            <>
                            <SignUp />
                            </>
                        } />
                        <Route exact path="/login" element={
                            <>
                            <LoginForm />
                            </>
                             
                        } />
                        <Route exact path="/received" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"receivedCredits"} userHandle={loggedInUser} type={"ReceivedCredits"} endPoint={"https://utility-api.onrender.com/ledger/received"} />
                               
                            </ProtectedRoute>
                        } />
                        <Route exact path="/paid" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"paidDebits"} userHandle={loggedInUser} type={"PaidDebits"} endPoint={"https://utility-api.onrender.com/ledger/paid"} />
                               
                            </ProtectedRoute>
                        } />
                        <Route exact path="/credits" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"credits"} userHandle={loggedInUser} type={"credits"} endPoint={"https://utility-api.onrender.com/ledger/credits"} />
                                
                            </ProtectedRoute>
                        } />
                        <Route exact path="/debts" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"debits"} userHandle={loggedInUser} type={"debits"} endPoint={"https://utility-api.onrender.com/ledger/debts"} />
                               
                            </ProtectedRoute>
                        } />
                        <Route exact path="/pendingCredits" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"pendingCredits"} userHandle={loggedInUser} type={"credits"} endPoint={"https://utility-api.onrender.com/ledger/pendingCredits"} />
                               
                            </ProtectedRoute>
                        } />
                        <Route exact path="/pendingDebits" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"PendingDebits"} userHandle={loggedInUser} type={"debits"} endPoint={"https://utility-api.onrender.com/ledger/pendingDebits"} />
                               
                            </ProtectedRoute>
                        } />
                        <Route exact path="/about" element={
                            <ProtectedRoute>
                                <NavBar />
                                <About />
                            </ProtectedRoute>

                        } />

                    </Routes>
                </div>
            </div>
        </Router>
        <Footer/>
         
    </>
}

export default App;