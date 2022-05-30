import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./movieCard";
//API KEY : 9f7da6a8

import './App.css';
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=9f7da6a8";
//http://www.omdbapi.com?apikey=9f7da6a8


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json([]);

        setMovies(data.Search);

    }

    useEffect(() => {
        searchMovies('Superman');

    }, []);

    return (
        <div className="app">
            <h1>RogerFlix</h1>
            <div className="search">
                <input
                placeholder="Search for movies "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}


    </div>
    
    );
}

export default App;