import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'

const API_URL = "http://www.omdbapi.com?apikey=f39f7cd3"

const App = () => {
    //asynchronous data mean its gonna take some time to fetch these movies
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [movieSearched, setMovieSearched] = useState(false);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        if (!movieSearched) {
            setMovieSearched(true);
        }
    }

    const displayMovies = (movies) => {
        return(
            movies?.length > 0 ?(
                <div className='container'>
                    {movies.map((movie)=> (
                        <MovieCard movie = {movie}/>
                    ))}
                </div>
            ) : (
                <div className = 'empty'>
                    <h2>No movies found</h2>
                </div>
            )
        );
    }

    useEffect(() => {
    }, [])

    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input
                  placeholder='Search for Movies'
                  value = {searchTerm}
                  onChange = {(e)=>setSearchTerm(e.target.value)}
                />
                <img
                  src = {SearchIcon}
                  alt='search'
                  onClick = {()=> searchMovies(searchTerm)}
                />
            </div>
            {movieSearched ? displayMovies(movies) : null}
        </div>
    )
}

export default App;