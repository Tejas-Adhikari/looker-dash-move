// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <form action='move_main.py' method='POST'>
//         <h1 >Looker-Move-Dashboard</h1>
//         <p>Enter Dashboard name: <input type='text' name='dash-name'></input></p>
//         <p>Enter Folder name: <input type='text' name='fold-name'></input></p>
//         <input type='submit' text="Submit" name='Submit'></input>
//         </form>

//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a payload object with the input values
    const payload = {
      input1,
      input2
    };

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
    }

    // Reset the input values
    setInput1('');
    setInput2('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input 1:
          <input type="text" value={input1} onChange={(e) => handleInputChange(e, setInput1)} />
        </label>
        <br />
        <label>
          Input 2:
          <input type="text" value={input2} onChange={(e) => handleInputChange(e, setInput2)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default App;

