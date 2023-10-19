import './Contato.css'
import React, {useState} from "react"

export default function Contato(){
    const [nome, setNome] = useState("");
    function change_nome(e: React.ChangeEvent<HTMLInputElement>){
        setNome(e.target.value)
    }
    const [sobrenome, setSobrenome] = useState("");
    function change_sobrenome(e: React.ChangeEvent<HTMLInputElement>){
        setSobrenome(e.target.value)
    }
    const [email, setEmail] = useState("");
    function change_email(e: React.ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value)
    }
    return(
        <main className='contato'>
        <section>
            <div className='quadrado'>
                <h1 className='mandaMensagem'>Mande-nos uma mensagem</h1>
                <p className='insiraInfo'>Insira suas informações</p>

            <form action="" method="post" className='escrevaMensagem'>
                <div className='Nome'>
                    <p>Insira seu nome: {nome}</p>
                    <input type='text' name='nome' placeholder='nome' className='caixaNome' onChange={change_nome}></input>
                </div>

                <div className='Sobrenome'>
                    <p>Seu sobrenome: {sobrenome}</p>
                    <input type='text' name='sobrenome' placeholder='sobrenome' className='caixaSobrenome' onChange={change_sobrenome}></input>
                </div>

                <div className='Email'>
                    <p>Seu email: {email}</p>
                    <input type='email' name='email' placeholder='email' className='caixaEmail' onChange={change_email}></input>
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

                <button type='submit' className='botao'>Enviar</button>
                </form>
                </div>
            </section>
        </main>
    )
}
