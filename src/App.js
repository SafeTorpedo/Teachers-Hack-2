import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React from "react";
// import ReactDOM from 'react-dom'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Form />
            <form action="../../post" method="POST"
                className="form">
                <button type="submit">Recognize</button>
            </form>
        </div>
    );
}

export default App;
