
import './App.css'
import Form from "./components/Form";
import React from 'react'
// import ReactDOM from 'react-dom'
import axios from 'axios';

function App() {
  const reactData = [{ id: 1, name: ' Tom' }, { id: 2, name: ' Sarah' }];
  const url = 'localhost:3000/api/users/register';
  let sendData = () => {
    axios.post(url, reactData)
      .then(res => console.log('Data send'))
      .catch(err => console.log(err.data))
  }
  sendData()
  return (
    <div className="App">
       <Form />
    </div>
  );
}

export default App;
