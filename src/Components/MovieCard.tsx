import React from 'react';
import Movie from '../Model/Movie';
  
interface MovieCardProps {
    movies: Movie[];
  }
  
  const MovieCard: React.FC<MovieCardProps> = ({ movies }) => {
    return (
        <>
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
            </>
    )
}

export default MovieCard;