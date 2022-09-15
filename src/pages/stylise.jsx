import styles from '../styles/Stylise.module.css'
import Link from 'next/link'

export default function Stylise() { 
    return( 
        
        <div className={styles.purple}>
            <Link href='/'>Home </Link>

            <h1>Estilo usando modulos</h1>
        </div>
    )
}