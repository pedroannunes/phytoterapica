import { useEffect } from 'react'
import Style from '../CSS/CosmeticosNaturais.module.css'
import CosmeticosNaturaisProps from './CosmeticosNaturaisProps'

function CosmeticosNaturais(){
    useEffect(() => {
        document.title = "Cosméticos Naturais - Phytoterapica";
      }, []);
    return(
        <main>
            <section className={Style.resumolink}>
                <h1 className={Style.tituloh1}>Cosméticos Naturais</h1>
                <p className={Style.subtitp}>Produzidos com ingredientes como óleos essenciais, óleos e manteigas vegetais típicas do Brasil, os cosméticos naturais da Phytoterápica são livres de petroquímicos, parabenos, sulfatos e essências sintéticas. Benéficos para a saúde e para o meio ambiente, possuem excelente compatibilidade com o corpo humano, penetrando de maneira completa na pele e nos cabelos.</p>
            </section>
            <nav className={Style.linkabxres}>
                <ul>
                    <li className={Style.homeabxtit}>Home</li>
                    <li className={Style.componto}>Cosméticos Naturais</li>
                </ul>
            </nav>
            <CosmeticosNaturaisProps/>
        </main>
    )
}

export default CosmeticosNaturais