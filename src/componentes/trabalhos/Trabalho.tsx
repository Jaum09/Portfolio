import './Trabalhos.css'
type TrampoProps={
    titulo:string,
    descricao:string,
    imagem:string
}

function Trampo(props:TrampoProps){
    return(
        <div className="trampo_content">
            <div className="foto_trampo">
                <img src={props.imagem}></img>
            </div>
                <h1>{props.titulo}</h1>
                <p className="descricao">{props.descricao}</p>
        </div>
    )
}
export default Trampo