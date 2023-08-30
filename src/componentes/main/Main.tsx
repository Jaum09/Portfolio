import './Main.css'
import fundo from '../../assets/Fundo.svg'

export default function Main(){
    return(
        <main>
            <div className='bem-vindo'>
            
            <div className='fundo'>
                <img src={fundo} className='fundo'></img>
            </div>
            <div className='texto'>
                <h1>Olá! Me chamo João Eduardo.<br></br>Também sou conhecido como Jão ou 
                    Jão Marcus.</h1>
                <p>Bem-vindo ao meu portfólio de desenvolvimento web! Sou apaixonado por criar 
                    experiências digitais envolventes<br></br>e funcionais utilizando as tecnologias HTML e 
                    CSS. Ao longo da minha jornada como desenvolvedor, tenho explorado<br></br>as 
                    possibilidades que essas linguagens oferecem para a construção de interfaces 
                    elegantes e interativas. Minha abordagem<br></br>combina criatividade e habilidades 
                    técnicas para traduzir conceitos em códigos limpos e bem-estruturados.</p>
            </div>
                
            </div>
            
        </main>
    )
};
    
