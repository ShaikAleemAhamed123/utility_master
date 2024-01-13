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
                                <Footer />
                            </ProtectedRoute>
                        } />
                        <Route exact path="/signup" element={
                            <>
                            <SignUp />
                            <Footer/>
                            </>
                        } />
                        <Route exact path="/login" element={
                            <>
                            <LoginForm />
                            <Footer/>
                            </>
                             
                        } />
                        <Route exact path="/received" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"receivedCredits"} userHandle={loggedInUser} type={"ReceivedCredits"} endPoint={"http://localhost:8080/user/received"} />
                                <Footer />
                            </ProtectedRoute>
                        } />
                        <Route exact path="/paid" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"paidDebits"} userHandle={loggedInUser} type={"PaidDebits"} endPoint={"http://localhost:8080/user/paid"} />
                                <Footer />
                            </ProtectedRoute>
                        } />
                        <Route exact path="/credits" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"credits"} userHandle={loggedInUser} type={"credits"} endPoint={"http://localhost:8080/user/credits"} />
                                <Footer />
                            </ProtectedRoute>
                        } />
                        <Route exact path="/debts" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"debits"} userHandle={loggedInUser} type={"debits"} endPoint={"http://localhost:8080/user/debts"} />
                                <Footer />
                            </ProtectedRoute>
                        } />
                        <Route exact path="/pendingCredits" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"pendingCredits"} userHandle={loggedInUser} type={"credits"} endPoint={"http://localhost:8080/user/pendingCredits"} />
                                <Footer />
                            </ProtectedRoute>
                        } />
                        <Route exact path="/pendingDebits" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"PendingDebits"} userHandle={loggedInUser} type={"debits"} endPoint={"http://localhost:8080/user/pendingDebits"} />
                                <Footer />
                            </ProtectedRoute>
                        } />
                        <Route exact path="/about" element={
                            <ProtectedRoute>
                                <NavBar />
                                <About />
                                <Footer />
                            </ProtectedRoute>

                        } />

                    </Routes>
                </div>

            </div>
        </Router>
    </>
}

export default App;