import '../footer/Footer.css'
import { Link } from 'react-router-dom'
import html from '/html.png'
import css from '/css.png'
import js from '/javascript.png'

function Footer(){
    return(
      <footer>
        <div className='container'>
        <div className='programas'>
          <h2>Sou especializado em:</h2>
          <a href='#'>
            <img src={html} className='html-imagem'></img>
            <img src={css} className='css-imagem'></img>
            <img src={js} className='js-imagem'></img>
          </a>
        </div> 

        <nav>
          <ul className='contato'>
            <h2>Entre em contato</h2>
            <li><Link to="/contato" className='contato'>Nos mande uma mensagem</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
    )
}
export default Footer