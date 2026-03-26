import  { useEffect, useState } from 'react'
import './Genre.css';
import axios from 'axios';

interface GenreProps{
  genreId : string;
  setGenre : (id: string) => void;
  type : "movie" | "tv";
}

interface GenreItem {
  id: number;
  name: string;
}

const Genre = ({genreId , setGenre, type } : GenreProps) => {

  const [genres, setGenres] = useState<GenreItem[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en`);
        setGenres(data.genres);
      }
      catch (error) {
        alert("Error fetching genres"+ error);
      }
    }
    fetchGenres();
  }, [type])

  return (
    <div className='genre-container'>
      {genres && genres.map((item) => {
        return(
          <button key={item.id}
          className={`genre-chip ${genreId === item.id.toString() ? 'active' : ""}`}
          onClick={() => setGenre(item.id.toString())}>{item.name}</button>
        )
      })}
    </div>
  )
}

export default Genre
