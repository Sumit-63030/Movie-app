import headerImg from '../assets/headerImg.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header-component'>
      <div className="header-image">
        <img src={headerImg} alt="" />
      </div>
      <div className="header-description">
        Movie Central
      </div>
    </div>
  )
}

export default Header
