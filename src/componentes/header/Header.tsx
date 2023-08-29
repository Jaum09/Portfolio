import './Header.css'
import logo from '../../assets/portfolio.png'
import lupa from '../../assets/loupe.png'

function Header(){
    return(
        <header>
            <div>
                <img src={logo} className='logo'></img>
            </div>
            <div className='search-box'>
                <input type='test' className='search-txt' placeholder='Pesquisar'></input>
                <a href='#' className='search-btn'>
                    <img src={lupa} className='lupa'></img>
                </a>
            </div>
        </header>
    )
}

export default Header