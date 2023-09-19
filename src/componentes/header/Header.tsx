import './Header.css'
import logo from '../../assets/Portfolio.png'
import wall from '../../assets/WallpaperHeader.png'

function Header(){
    return(
        <header className='header-container'>
            <div className='header'>
                <img src={logo} className='logo'></img>    
            </div>
            
            <img src={wall} className='Wallpaper'></img>
        </header>
    )
}

export default Header