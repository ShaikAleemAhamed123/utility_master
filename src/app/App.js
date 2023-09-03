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
                            <SignUp />
                        } />
                        <Route exact path="/login" element={
                            <LoginForm />
                        } />
                        <Route exact path="/credits" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"Credits"} userHandle={loggedInUser} type={"credits"} endPoint={"https://utility-server.azurewebsites.net/user/credits"} />
                                <Footer />
                            </ProtectedRoute>
                        } />
                        <Route exact path="/debts" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"Debits"} userHandle={loggedInUser} type={"debits"} endPoint={"https://utility-server.azurewebsites.net/user/debts"} />
                                <Footer />
                            </ProtectedRoute>
                        } />
                        <Route exact path="/pending" element={
                            <ProtectedRoute>
                                <NavBar />
                                <Txnpage txnType={"Pending"} userHandle={loggedInUser} type={"pending"} endPoint={"https://utility-server.azurewebsites.net/user/pending"} />
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