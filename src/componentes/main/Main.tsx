import './Main.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/javascript.png'

export default function Main(){
    return(
        <main>
            <div className='bem-vindo'>
                <h1>Olá! Me chamo João Eduardo. Também sou conhecido como Jão ou 
                    Jão Marcus.</h1>
                <p>Estou me formando em Técnico em Informática para Internet, 
                    na escola Instituto Federal Mato Grosso do Sul (IFMS).</p>

                <h2>Sou especializado em:</h2>
                <a href='#'><img src={html} className='html-imagem'></img></a>
                <a href='#'><img src={css} className='css-imagem'></img></a>
                <a href='#'><img src={js} className='js-imagem'></img></a>
            </div>
        </main>
    )
};
    
