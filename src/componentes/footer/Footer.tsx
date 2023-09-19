import '../footer/Footer.css'
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

        <ul className='lista'>
          <li><h3>Entre em contato</h3></li>
          <li><a href="#" className='footer-link'>Gmail</a></li>
          <li><a href="#" className='footer-link'>Instagram</a></li>
          <li><a href="#" className='footer-link'>Facebook</a></li>
          <li><a href="#" className='footer-link'>Twitter</a></li>
          
        </ul>

        <ul className='lista'>
          <li><h3>Sobre</h3></li>
          <li><a href="#" className='footer-link'>Trabalhos</a></li>
          <li><a href="#" className='footer-link'>Códigos</a></li>
          <li><a href="#" className='footer-link'>Instituição</a></li>
          <li><a href="#" className='footer-link'>Projetos</a></li>
        </ul>
      </div>
    </footer>
    )
}
export default Footer