import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Animals from './Animals'


function useAnimals() {
  const [animal, setAnimals] = useState([])

  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery');
    search(lastQuery)
  }, []);

  const search = async (q) => {
    const response = await fetch(
      'http://localhost:8080?' + new URLSearchParams({ q })
    );

    const data = await response.json();
    setAnimals(data)

    localStorage.setItem('lastQuery', q);
  };

  return {search, animal}
}

function App() {
  const{search, animal} = useAnimals();
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
