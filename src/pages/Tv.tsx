import { useEffect, useState } from 'react';
import './Tv.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Genre from '../components/Genre/Genre';
import Pagination from '../components/Pagination/Pagination';


interface TvItem {
  id: number;
  name: string;
  poster_path: string;
  first_air_date: string;
}

const Tv = () => {

  const [state, setState] = useState<TvItem[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page') || 1);
  const genreId = searchParams.get('tvGenre') || "";

  const setPage = (newPage: number) => {
    setSearchParams({ tvGenre: genreId, page: newPage.toString() });
  }

  const setGenre = (id: string) => {
    setSearchParams({ tvGenre: id, page: "1" });
  };



  useEffect(() => {
    const fetchTvSeries = async () => {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=${page}&with_genres=${genreId}`);
        setState(data.results);
        window.scroll(0, 0);
      }

      catch (error) {
        alert("Error fetching Tv Series" + error);
      };

    }
    fetchTvSeries();
  }, [page, genreId]);

  const navigate = useNavigate();

  return (
    <div className="tv-container">
      <h2 className='tv-page-title'>TV Series</h2>
      <Genre genreId={genreId} setGenre={setGenre} type='tv' />
      <div className="tv-movies-grid">
        {state && state.map((item) => (
          <div className="tv-card" 
          key={item.id}
          onClick={() => navigate(`/tv/${item.id}`)}
          >
            <img
              src={item.poster_path
                ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                : "https://via.placeholder.com/300x450"}
              alt={item.name}
              className="tv-poster"
            />
            <b className='tv-title'>{item.name}</b>
            <div className="tv-subtitle">
              <span>TV Series</span>
              <span>{item.first_air_date}</span>
            </div>
          </div>
        ))}
      </div>
      <Pagination setPage={setPage} page={page} />
    </div>
  )
}

export default Tv
