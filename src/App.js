import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React from "react";
// import ReactDOM from 'react-dom'
import axios from "axios";
import Hero from "./components/Hero";
import Canvas from "./components/Canvas";

function App() {
    const reactData = [
        { id: 1, name: " Tom" },
        { id: 2, name: " Sarah" },
    ];
    const url = "localhost:3000/api/users/register";
    let sendData = () => {
        axios
            .post(url, reactData)
            .then((res) => console.log("Data send"))
            .catch((err) => console.log(err.data));
    };
    sendData();
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Form />
            <Canvas width={700} height={500} />
        </div>
    );
}

export default App;
