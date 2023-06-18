import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';
import SearchIcon from './search.svg';

//API KEY : 9f7da6a8


const API_URL : string = "http://www.omdbapi.com/?i=tt3896198&apikey=9f7da6a8";
//http://www.omdbapi.com?apikey=9f7da6a8



const App : React.FC = ()  => {

    const[movies, setMovies] = useState<Movie[]>([]);
    const[searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title : string) => {
      const res = await fetch(`${API_URL}&s=${title}`);
      let data = await res.json();

        if(data.Response != "True"){
          console.error("couldn't fetch movies");
          return;
        }

        const mappedMovies: [Movie] = data.Search.map((movie: any) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          type: movie.Type,
          poster: movie.Poster,
        }));
    
        setMovies(mappedMovies);


    }

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
      <h1>RogerFlix</h1>
      <div className="search">
                <input
                placeholder="Search for movies "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                />
                <img
                src={SearchIcon}
                alt="Search"
                onClick={() => searchMovies(searchTerm)}
                />
      </div>
      { movies?.length > 0
                ? (
                    <div className="container">
                    {movies.map((movie : Movie) => (
                          <div className="movie" key={movie.id}>
                                <div>
                                     <p>{movie.year}</p>
                                </div>
            
                            <div>
                                <img src={movie.poster !== 'N/A' ? movie.poster : 'https//via.placeholder.com/400'} alt={movie.title} />
                            </div>
            
                            <div>
                                <span>{movie.type}</span> 
                                <h3>{movie.title}</h3>
                            </div>
                        </div>
                    ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
      </div>

    </>
  );
}

export default App;
