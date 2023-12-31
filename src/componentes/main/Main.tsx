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
            titulo:"HTML",
            descricao:"Possuo um ótimo conhecimento sobre a programação em HTML e já utilizei muito para criar outros projetos.",
            imagem:"/html.png"
        },
        {
            id:2,
            titulo:"CSS",
            descricao:"Possuo um ótimo conhecimento sobre programação e como estilizar em CSS e já utilizei muito para criar outros projetos.",
            imagem:"/css.png"
        },
        {
            id:3,
            titulo:"JavaScript",
            descricao:"Meu conhecimento sobre JavaScript é simples, porém eu já fiz vários projetos utilizando JavaScript.",
            imagem:"/javascript.png"
        },
        {
            id:4,
            titulo:"Filmora X",
            descricao:"Filmora é um editor de vídeos que eu usei por muito tempo para editar vídeos, músicas, trabalhos escolares, etc.",
            imagem:"/Filmora.png"
        },
        {
            id:5,
            titulo:"Robótica",
            descricao:"Fiz parte da robótica do IFMS por 2 anos, mexendo com lego EV3 e Arduíno.",
            imagem:"/Robotica.png"
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

            <div className='linha'></div>
            
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