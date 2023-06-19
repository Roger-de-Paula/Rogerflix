import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './Model/Movie';
import MovieCard from './Components/MovieCard'
import SearchMovies from './Components/SearchMovie';
import e from 'express';
//API KEY : 9f7da6a8

const API_URL : string = "http://www.omdbapi.com/?i=tt3896198&apikey=9f7da6a8";
//http://www.omdbapi.com?apikey=9f7da6a8



const App : React.FC = ()  => {
  const[movies, setMovies] = useState<Movie[]>([]);
  const[searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title : string) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    let data = await res.json();
    let mappedMovies: [] = [];
      if(data.Response === "True" && data.Search !== undefined){
        mappedMovies = data.Search.map((movie: any) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          type: movie.Type,
          poster: movie.Poster,
        }));  
      }
      
      setMovies(mappedMovies);
  }

  // function to handle the enter key
  const handleKeyDown = (event: any) => {
    if(event.key === "Enter"){
      searchMovies(searchTerm);
    }
  }

  useEffect(() => {
      searchMovies('Superman');

  }, []);

  return (
    <>
     <div className="app">
      <SearchMovies searchTerm={searchTerm} handleKeyDown={handleKeyDown} setSearchTerm={setSearchTerm} searchMovies={searchMovies}  />
      </div>
      <MovieCard movies={movies} />

    </>
  );
}

export default App;