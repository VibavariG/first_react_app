import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com?apikey=f39f7cd3"

const App = () => {
    //asynchronous data mean its gonna take some time to fetch these movies
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [])

    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input
                  placeholder='Search for Movies'
                  value = 'Superman'
                  onChange = {()=>{}}
                />
                <img
                  src = {SearchIcon}
                />
            </div>
        </div>
    )
}

export default App;