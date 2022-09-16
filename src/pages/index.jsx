
import Nav from "../components/Nav"

export default function Home() { 
   
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
       <Nav text='Estiloso' destino="/stylise"></Nav>
       <Nav text='App' destino="/app" cor="darkviolet"></Nav>
       <Nav text='Jsx' destino="/jsx" cor="crimson"></Nav>
        </div>
    )
}