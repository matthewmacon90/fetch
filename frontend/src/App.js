import { useState } from "react";
import useGTM from "./hooks/useGTM";
import AuthContext from "./context/authContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RoutesComponent from "./components/routes/RoutesComponent";
import "./App.css";

function App() {
    // useGTM();
    const initialValues = {
        isAuthenticated: false,
        user: null,
    };
    const [auth, setAuth] = useState(initialValues);

    return (
        <div className="App">
            <AuthContext.Provider value={{ auth, setAuth }}>
                <Header />
                <RoutesComponent />
            </AuthContext.Provider>
            <Footer />
        </div>
    );
}

export default App;
