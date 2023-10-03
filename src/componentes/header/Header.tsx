import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Portfolio.png'
import wall from '../../assets/WallpaperHeader.png'

function Header(){
    return(
        <header className='header-container'>
            <div className='header'>
                <ul><Link to="/"><img src={logo} className='logo'></img></Link></ul>  
            </div>
            
            <img src={wall} className='Wallpaper'></img>
        </header>
    )
}

export default Header