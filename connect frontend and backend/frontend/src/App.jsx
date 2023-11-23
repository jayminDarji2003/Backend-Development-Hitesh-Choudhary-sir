import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get("https://localhost:3000/jokes")
      .then((response) => {
        setjokes(response)
      })
      .catch((error) => {
        console.log(error.message);
      })
  })

  return (
    <>
      <h1>First Full Stack Application.</h1>
      <p>JOKES = {jokes.length}</p>

      {
        jokes.map((joke) => {
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <h3>{joke.content}</h3>
          </div>
        })
      }
    </>
  )
}

export default App
