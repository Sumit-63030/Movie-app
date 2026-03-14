import { useSearchParams } from 'react-router-dom';
import './Movies.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination/Pagination';

interface MovieItem {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const Movies = () => {

  const [state, setState] = useState<MovieItem[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page') || 1);
  const genreId = searchParams.get('genre') || "";

  const setPage = (newPage: number) => {
    setSearchParams({ genre: genreId, page: newPage.toString() })
  }


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genreId}`);
        setState(data.results);
        window.scroll(0, 0);
      }
      catch (error: unknown) {
        if (error instanceof Error) {
          alert(`Error fetching movies: ${error.message}`);
        } else {
          alert('Error fetching movies: An unknown error occurred.');
        }
      }
    }

    fetchMovies();
  }, [page, genreId])

  return (
    <div className='movies-container'>
        <h2 className='page-title'>Discover Movies</h2>
      <div className="movies-grid">
        {state && state.map((item) => (
          <div className="movie-card" key = {item.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" className='poster' />
            <b className='title'>{item.title}</b>
            <div className="subtitle">
              <span>Movie</span>
              <span>{item.release_date}</span>
            </div>
          </div>
        ))}
      </div>
          <Pagination setPage={setPage} page={page}/>
    </div>
    
  )
}

export default Movies
