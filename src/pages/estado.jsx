import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() { 
    
    let numero = 3
    const [number, setNumber] = useState(numero)

    function inc() { 
        setNumber(number + 1)
    }
    return (
        <Layout title="Componente com Estado">

            <span>{number}</span>
            <button onClick={e=> inc()}>Incremenetar</button>

        </Layout>
    )
}