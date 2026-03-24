import { useParams } from 'react-router-dom';
import './Details.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


interface DetailsItem {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
}
const Details = () => {

  const { id, type } = useParams();
  const [data, setData] = useState<DetailsItem | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`)
        setData(data);
        window.scroll(0, 0);
      }
      catch (error) {
        alert("Errorfetching tbe details" + error);
      }
    }
    fetchDetails();
  }, [id, type]);

  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="details-container">
      {/* BACKDROP */}
      <div
        className="backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        }}
      />

      <div className="details-content">
        {/* POSTER */}
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
              : "https://via.placeholder.com/300x450"
          }
          alt=""
          className="details-poster"
        />

        {/* INFO */}
        <div className="details-info">
          <h2>{data.title || data.name}</h2>

          <p className="rating">⭐ {data.vote_average}</p>

          <p className="date">
            {data.release_date || data.first_air_date}
          </p>

          <p className="overview">{data.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Details
