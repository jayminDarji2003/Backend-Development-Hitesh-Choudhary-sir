import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // axios.get("/api/jokes")
    axios.get("https://jokesbackend.onrender.com/api/jokes")
      .then((response) => {
        setJokes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <h1>First Full Stack Application.</h1>
      <h3>JOKES = {jokes.length}</h3>

      {jokes.length > 0 ? (
        jokes.map((joke) => (
          <div className='jockContainer' key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      ) : (
        <p>Loading jokes...</p>
      )}
    </>
  );
}

export default App;
