import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios'

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
      <header className="App-header">
       
        <p>
          Hello Team
        </p>
       
      </header>
    </div>
  );
}

export default App;
