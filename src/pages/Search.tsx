import { useEffect, useState } from 'react';
import axios from 'axios';
import './Search.css';// 
import Pagination from '../components/Pagination/Pagination';   
import { useNavigate } from 'react-router-dom';

interface SearchItem {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  media_type: string;
  release_date?: string;
  first_air_date?: string;
}

const Search = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery) return;

    const fetchSearch = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${debouncedQuery}&page=${page}`
        );

        setResults(data.results);
        window.scroll(0, 0);
      } catch (error) {
        console.log("Error fetching search", error);
      }
    };

    fetchSearch();
  }, [debouncedQuery, page]);
  
  const navigate = useNavigate();
  return (
    <div className="search-container">
      <h2 className="search-page-title">Search</h2>

      <input
        type="text"
        placeholder="Search movies or TV..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      {debouncedQuery && results.length === 0 && (
        <p className="no-results">No results found</p>
      )}

      <div className="search-movies-grid">
        {debouncedQuery &&
          results
            .filter((item) => item.media_type !== "person")
            .map((item) => (
              <div className="search-movie-card" 
              key={item.id}
              onClick={()=> navigate(`/${item.media_type}/${item.id}`)}
              >
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                      : "https://via.placeholder.com/300x450"
                  }
                  alt=""
                  className="search-poster"
                />
                <b className="search-title">{item.title || item.name}</b>

                <div className="search-subtitle">
                  <span>{item.media_type.toUpperCase()}</span>
                  <span>{item.release_date || item.first_air_date}</span>
                </div>
              </div>
            ))}
      </div>

      {debouncedQuery && results.length > 0 && (
        <Pagination page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default Search;