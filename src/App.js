
import React,{useState} from 'react'

import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  const apiKey = "9377e1fe"

  const [movie, setMovie] = React.useState(null)

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );

      const data = await response.json();

      setMovie(data)

      

  }

  const randomgetMovie = async () => {
    
    let number = Math.floor(Math.random() *1899970 +1000000);

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=9377e1fe&i=tt${number}`
    );

      const data = await response.json();

      setMovie(data)

      
  }
  React.useEffect(() =>{
    randomgetMovie()
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
