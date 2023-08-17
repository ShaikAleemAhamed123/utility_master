import NavBar from './navBar'
import Footer from './footer'
import InputForm from './inputForm'
import About from './about'
import './App.css'
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
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={
                            <InputForm />
                        } />
                        <Route exact path="/about" element={
                            <About />
                        } />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    </>
}

export default App;