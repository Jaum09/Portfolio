import './Contato.css'

function Contato(){
    return(
        <main className='contato'>
        <section>
            <div>
                <h1>Mande-nos uma mensagem</h1>
                <p>Insira suas informações</p>
            </div>

            <form>
                <fieldset>
                    <div>
                        <label>Nome</label>
                        <input type='text' name='nome' id='nome'></input>
                    </div>

                    <div>
                        <label>Sobrenome</label>
                        <input type='text' name='sobrenome' id='sobrenome'></input>
                    </div>
                </fieldset>

                <div>
                    <label>Email</label>
                    <input type='email' name='email' id='email'></input>
                </div>

                <div>
                    <label>Escolaridade</label>
                    <select id='escolaridade'>
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

                <fieldset>
                    <div>
                        <label>Selecione o meio de programação que utiliza:</label>
                        <input type='checkbox' id='tecnologia1' name='tecnologia1' value='HTML'></input>
                        <label className='tecnologica1'>HTML</label>
                        <input type='checkbox' id='tecnologia2' name='tecnologia2' value='CSS'></input>
                        <label className='tecnologica2'>CSS</label>
                        <input type='checkbox' id='tecnologia1' name='tecnologia1' value='HTML'></input>
                        <label className='tecnologica1'>JavaScript</label>
                    </div>
                </fieldset>
            </form>
        </section>
        </main>
    )
}

export default Contato