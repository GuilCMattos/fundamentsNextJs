import Layout from '../components/Layout'

export default function Jsx() { 
    const title = <h1>JSX é um conceito Central 2</h1>

    function subtitle() { 
        return <h2>{"muito Demais".toUpperCase()}</h2> 
    }
  
    return(
        <Layout title="Entendendo o JSX">

        <div>
            {title}
            {subtitle()}

            <p>
                {JSON.stringify({nome: 'Gui', idade: 24})}
            </p>
        </div>
        </Layout>
    )
}