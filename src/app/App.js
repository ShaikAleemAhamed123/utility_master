import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import InputForm from './Components/InputForm'
import About from './Components/About'
import Landing from './Components/Landing'
import './App.css'
import LoginForm from './Components/LoginForm'
import ProtectedRoute from './Components/ProtectedRoute'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
    return <>
        <Router>
            <div className="app-wrapper">
                <div className="main-content">

                    <Routes>
                        <Route exact path="/" element={
                            <Landing />
                        } />
                        <Route exact path="/login" element={
                            <LoginForm />
                        } />
                        <Route exact path="/home" element={
                            <ProtectedRoute>
                                <>
                                    <NavBar />
                                    <InputForm />
                                    <Footer />
                                </>
                            </ProtectedRoute>
                        } />
                        <Route exact path="/about" element={
                            <ProtectedRoute component={
                                <>
                                    <NavBar />
                                    <InputForm />
                                    <Footer />
                                </>
                            } />

                        } />
                    </Routes>
                </div>

            </div>
        </Router>
    </>
}

export default App;