import { HiFilm, HiFire, HiSearch } from 'react-icons/hi'
import './Footer.css'
import { HiTv } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const data = [
    { icon: <HiFire />, name: "Trending", link: "/" },
    { icon: <HiFilm />, name: "Movies", link: "/movies" },
    { icon: <HiTv />, name: "TV Series", link: "/tv" },
    { icon: <HiSearch />, name: "Search", link: "/search" }
  ]
  return (
    <div className='footer-container'>

      <div className="footer-links">
        {data.map((item, index) => (
          <NavLink to={item.link}
            key={index}
            className= {({isActive}) => (isActive ? 'footer-btn active' : 'footer-btn')}>
            <span className='footer-icon'>{item.icon}</span>
            <span className='footer-icon'>{item.name}</span>
          </NavLink>
        ))} 
      </div>
      <div className="footer-text">Made by : Sumit Dharmadhikari</div>

    </div>

  )
}

export default Footer
