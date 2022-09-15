import styles from '../styles/Stylise.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Stylise() { 
    return( 
        <Layout title="Exemplo de CSS Modularizado">

        <div className={styles.purple}>
           
           <h1>Estilo usando modulos</h1>

           </div>

        </Layout>
        
           

          
        
    )
}