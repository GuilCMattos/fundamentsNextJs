import Layout from '../../../components/Layout'

import { useRouter } from "next/router"
import { useEffect } from "react";

export default function clientCode() { 

    const router = useRouter();
    useEffect(()=> { 
        console.log(router.query.code)
    }, [])

    return ( 
        <Layout title="NAvegação dinâmica">
            <div>Código do usuário: {router.query.code}</div>
            <div>
                Código Filial: {router.query.filial}
            </div>

        </Layout>
    )
}