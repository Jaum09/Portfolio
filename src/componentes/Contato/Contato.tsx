import './Contato.css'
import React, {useState} from "react"

export default function Contato(){
    const [texto, setTexto] = useState("");
    function change_txt(e: React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }
    return(
        <main className='contato'>
        <section>
                <h1 className='mandaMensagem'>Mande-nos uma mensagem</h1>
                <p className='insiraInfo'>Insira suas informações</p>

            <form action="" method="post" className='escrevaMensagem'>
                <div className='Nome'>
                    <input type='text' name='nome' placeholder='nome' className='caixaNome' onChange={change_txt}></input>
                </div>

                <div className='Sobrenome'>
                    <input type='text' name='sobrenome' placeholder='sobrenome' className='caixaSobrenome' onChange={change_txt}></input>
                </div>

                <div className='Email'>
                    <input type='email' name='email' placeholder='email' className='caixaEmail' onChange={change_txt}></input>
                </div>

                <div className='Escolaridade'>
                    <label>Escolaridade </label>
                    <select className='escolaridade'>
                        <option selected disabled value="">Escolha</option>
                        <option>Fundamental</option>
                        <option>Médio</option>
                        <option>Superior (Graduação)</option>
                        <option>Pós-graduação</option>
                        <option>Mestrado</option>
                        <option>Doutorado</option>
                        <option>Servidor(a)</option>
                    </select>
                </div>

                <div className='Programação'>
                    <label>Selecione o meio de programação que utiliza: </label>
                    <input type='checkbox' name='tecnologia1' value='HTML'></input>
                    <label className='tecnologica1'>HTML </label>
                    <input type='checkbox' name='tecnologia2' value='CSS'></input>
                    <label className='tecnologica2'>CSS </label>
                    <input type='checkbox' name='tecnologia1' value='HTML'></input>
                    <label className='tecnologica1'>JavaScript</label>
                </div>

                <button type='submit'>Enviar</button>
                </form>
            </section>
        </main>
    )
}
