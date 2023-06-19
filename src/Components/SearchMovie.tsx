import React, { useEffect, useState } from 'react';
import Movie from '../Model/Movie';
import SearchIcon from '../search.svg';

interface props {
    searchTerm: string,
    handleKeyDown: (event: any) => void;
    setSearchTerm: (e: string) => void;
    searchMovies: (searchTerm: string) => void;
}

const SearchMovies: React.FC<props> = (props) => {

    return (
        <>
            <h1 id="logotype">Cinemaze</h1>
            <div className="search">
            <input
            placeholder="Search for movies "
            value={props.searchTerm}
            onChange={(e) => props.setSearchTerm(e.target.value)}
            onKeyDown={props.handleKeyDown}
            />
            
            <img
            src={SearchIcon}
            alt="Search"
            onClick={() => props.searchMovies(props.searchTerm)}
            />
      </div>
        
        </>
    )
}

export default SearchMovies;