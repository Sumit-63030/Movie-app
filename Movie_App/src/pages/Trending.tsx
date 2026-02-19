import { useEffect, useState } from 'react';
import './Trending.css';
import axios from 'axios';

interface MovieItem {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  media_type: string;
  release_date?: string;
  first_air_date?: string;
}

const Trending = () => {
  const [state, setState] = useState<MovieItem[]>([]);

  

  useEffect(() => {
    const fetchTrending = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);

      console.log(response.data.results);
      setState(response.data.results);
    } catch (error) {
      console.log("Error fetching data", error)
    }

  } 
    fetchTrending();
  }, [])

  return (
    <div className="trending-container">
      <h2 className='page-title'>Trending Today</h2>
      <div className="trending-grid">
        {state && state.map((item: MovieItem) => (
          <div className="movie-card" key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" className='poster' />
            <b className='title'>{item.title || item.name}</b>
            <div className="subtitle">
              <span>{item.media_type == "tv" ? "TV Series" : "Movie"}</span>
              <span>{item.release_date || item.first_air_date}</span>
            </div>
          </div>
        ))}


      </div>
    </div>
  )
}

export default Trending

