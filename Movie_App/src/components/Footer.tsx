import { HiFilm, HiFire, HiSearch } from 'react-icons/hi'
import './Footer.css'
import { HiTv } from 'react-icons/hi2'

const Footer = () => {
  const data = [
    {icon : <HiFire /> , name : "Trending"},
    {icon : <HiFilm /> , name : "Movies"},
    {icon : <HiTv /> , name : "TV Series"},
    {icon : <HiSearch /> , name : "Search"}
  ]
  return (
    <div className='footer-container'>

    <div className="footer-links">
      {data.map((item , index) => (
        <button key={index} className='footer-btn'>
          <span className='footer-icon'>{item.icon}</span>
          <span className='footer-icon'>{item.name}</span>
        </button>
      ))}
    </div>
    <div className="footer-text">Made by : Sumit Dharmadhikari</div>

    </div>
    
  )
}

export default Footer
