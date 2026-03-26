import { useNavigate, useSearchParams } from 'react-router-dom';
import './Movies.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination/Pagination';
import Genre from '../components/Genre/Genre';

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
  const genreId = searchParams.get('movieGenre') || "";
  const setPage = (newPage: number) => {
    setSearchParams({ movieGenre: genreId, page: newPage.toString() });
  }

  const setGenre = (id: string) => {
    setSearchParams({ movieGenre: id, page: "1" });
  };

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
  }, [page, genreId]);

  const navigate = useNavigate();

  return (
    <div className='movies-container'>
      <h2 className='movie-page-title'>Discover Movies</h2>

      <Genre genreId={genreId} setGenre={setGenre} type="movie" />
      <div className="movies-grid">
        {state && state.map((item) => (
          <div className="movies-movie-card"
           key={item.id}
           onClick={() => navigate(`/movie/${item.id}`)}
           >
            <img src={item.poster_path
              ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Poster+Available"}
              alt={item.title} className='movie-poster' />
            <b className='movie-title'>{item.title}</b>
            <div className="movie-subtitle">
              <span>Movie</span>
              <span>{item.release_date}</span>
            </div>
          </div>
        ))}
      </div>
      <Pagination setPage={setPage} page={page} />
    </div>

  )
}

export default Movies
