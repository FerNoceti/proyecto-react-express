import React, {useEffect, useState} from 'react';
import './App.css'


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setData(data.message));
  }
  , []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data}</h1>
      </header>
    </div>
  );
}

export default App;
