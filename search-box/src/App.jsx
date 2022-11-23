import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Animals from './Animals'

function App() {
  const [animal, setAnimals] = useState([])

  const search = async (q) => {
    const response = await fetch(
      'http://localhost:8080?' + new URLSearchParams({ q })
    );

    const data = await response.json();
    setAnimals(data)
  }

  return (
    <div className="App">
      <h1>Search Box App</h1>
      <input type="text" placeholder="Search" onChange={(e) => search(e.target.value)} />

      <ul>
        {animal.map((animal) => (
          <Animals key={animal.id} {...animal} />
        ))}
        {animal.length === 0 && 'No Animals'}
      </ul>
    </div>
  )
}

export default App
