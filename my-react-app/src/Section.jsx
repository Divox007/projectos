import {useState} from 'react'

function Section () {
    const [nome, SetName] = useState ('')
    return (
        <section>
           <form action="">
            <label htmlFor="nome">
            Nome: <input type="text" id="nome" value={nome} onChange = {e => SetName(e.target.value)} 
            />
            <p>valor actual: {nome}</p>
            </label>
           </form>
        </section>
    )
}

export default Section