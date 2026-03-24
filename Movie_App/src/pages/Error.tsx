import { useNavigate } from 'react-router-dom';
import './Error.css';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>

      <h2 className="error-text">Page Not Found</h2>

      <p className="error-desc">
        The page you are looking for does not exist.
      </p>

      <button 
        className="home-button"
        onClick={() => navigate('/')}
      >
        Go Home
      </button>
    </div>
  );
};

export default Error;