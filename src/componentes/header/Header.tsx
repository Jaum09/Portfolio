import './Header.css'
import logo from '../../assets/Portfolio.png'

function Header(){
    return(
        <header className='header-container'>
            <div className='header'>
                <img src={logo} className='logo'></img>
            </div>
        </header>
    )
}

export default Header