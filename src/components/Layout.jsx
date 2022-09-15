import Link from "next/link"
import styles from '../styles/Layout.module.css'

export default function Layout({title, children}) { 
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
            <h1>{title ?? 'Mais um exemplo'}</h1>
            <Link href='/'> Voltar </Link>

            </div>

            <div className={styles.content}>
            {children}
            </div>
    
        
        </div >
    )
}