import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao(props) { 

    const [code, setCode] = useState(1)
    const [client, setClient] = useState({})

   async function getClient() {
    
    const resp = await fetch(`http://localhost:3000/api/clients/${code}`)
    const dados = await resp.json()
    setClient(dados)
    
    // fetch(`http://localhost:3000/api/clients/${code}`)
    // .then(resp => resp.json())
    // .then(json => { 
    //     setClient(json)
        
    // })
   }

    return(
        <Layout title="Integração com API">

            <div>
                <input type="number" value={code} onChange={e => setCode(e.target.value)} />
                <button onClick={getClient}>Obter cliente</button>
            </div>

        <ul>
            <li>Código: {client.id} </li>
            <li>Nome: {client.nome} </li>
            <li>Email: {client.email} </li>
        </ul>
        </Layout>
    )
}