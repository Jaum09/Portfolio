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
            titulo:"Robótica",
            descricao:"Foto tirada durante uma atividade da robótica, onde o objetivo era criar um carrinho de arduíno.",
            imagem:"/Trabalho1.jpg"
        },
        {
            id:2,
            titulo:"HTML",
            descricao:"Possuo um ótimo conhecimento sobre a programação em HTML e já utilizei muito para criar outros projetos.",
            imagem:"/html.png"
        },
        {
            id:3,
            titulo:"O Exorcista do Papa",
            descricao:"",
            imagem:"/"
        },
        {
            id:4,
            titulo:"Velozes & Furiosos 10",
            descricao:"",
            imagem:"/"
        },
        {
            id:5,
            titulo:"Super Mario Bros. O Filme",
            descricao:"",
            imagem:"/"
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