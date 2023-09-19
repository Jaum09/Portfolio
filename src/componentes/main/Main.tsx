import './Main.css'
import fundo from '../../assets/Fundo.svg'
import { useState } from "react";
import Trampo from "../trabalhos/Trabalho";
import './Main.css'
type TramposType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}

export default function Main(){
    const [texto,setTexto] = useState("")
    const trampos:TramposType[] = [
        {
            id:1,
            titulo:"Barbie",
            descricao:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade. “Você não reconhece seu corpo, sua aparência ou suas próprias emoções”. No filme, Barbie enfrenta uma crise existencial após se aventurar no “Mundo Real”, questionando quem ela é, experimentando os desafios do perfeccionismo e as armadilhas das expectativas de tentar ser alguém melhor.",
            imagem:"/Barbie.png"
        },
        {
            id:2,
            titulo:"Interestelar",
            descricao:"As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
            imagem:"/Interestelar.png"
        },
        {
            id:3,
            titulo:"O Exorcista do Papa",
            descricao:"O padre Gabriele Amorth, exorcista do Vaticano, luta contra Satanás e demônios possuidores de inocentes. Um retrato detalhado de um padre que realizou mais de 100 mil exorcismos em sua vida. Gabriele Amorth (Crowe) é um padre italiano responsável por investigar casos de possessão. Seu trabalho é diretamente organizado pelo Papa (Nero), que conta com a ajuda de Amorth para a resolução de casos inexplicáveis.",
            imagem:"/OExorcistaDoPapa.png"
        },
        {
            id:4,
            titulo:"Velozes & Furiosos 10",
            descricao:"Dom Toretto e sua família precisam lidar com o adversário mais letal que já enfrentaram. Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado para destruir o mundo de Dom e todos que ele ama. Mas agora, o grupo terá que enfrentar um oponente ainda mais letal vindo do passado e com sede de vingança: Dante Reyes (Jason Momoa), o filho do traficante Hernan Reyes (Joaquim de Almeida), morto no longa Velozes & Furiosos 5, de 2011.",
            imagem:"/VelozesEFuriosos.jpg"
        },
        {
            id:5,
            titulo:"Super Mario Bros. O Filme",
            descricao:"Mario é um encanador junto com seu irmão Luigi. Um dia, eles vão parar no reino dos cogumelos, governado pela Princesa Peach, mas ameaçado pelo rei dos Koopas, que faz de tudo para conseguir reinar em todos os lugares. Os dois acabam viajando por labirinto subterrâneo e vão parar em um universo paralelo. Enquanto Luigi se vê preso pelo violento Bowser, Mario terá que ajudar uma princesa a salvar seu reino e libertar seu irmão!",
            imagem:"/SuperMario.png"
        }
    ]

    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        setTexto (e.target.value)
    }
    return(
        <>
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

            <div className="pesquisa">
                <p>Buscar Trampo</p>
                <input type='text' 
                        className='barrapesquisa' 
                        onChange={mudaTexto}
                    />
                {texto && <p>Resultados Para: {texto}</p>}
                </div>

                <div className='trabalhoPrincipal'>
                {trampos
                    .filter((trampo) =>
                    trampo.titulo.toLowerCase().includes(texto.toLowerCase())
                )
                .map((trampo) => (
                    <Trampo
                    key={trampo.id}
                    descricao={trampo.descricao}
                    titulo={trampo.titulo}
                    imagem={trampo.imagem}
                />
                ))}
            </div>
        </main>
    </>
)}