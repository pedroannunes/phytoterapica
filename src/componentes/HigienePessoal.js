import { useEffect } from 'react'
import Style from '../CSS/HigienePessoal.module.css'
import HigienePessoalProps from './HigienePessoalProps'

function HigienePessoal(){
    useEffect(() => {
        document.title = "Higiene Pessoal - Phytoterapica";
      }, []);
    return(
        <main>
            <section className={Style.resumolink}>
                <h1 className={Style.tituloh1}>Higiene Pessoal</h1>
                <p className={Style.subtitp}>Linha de produtos com óleos essenciais: Sabonetes com óleos vegetais, creme dental adulto, gel dental infantil e enxaguante bucal com extratos naturais.</p>
            </section>
            <nav className={Style.linkabxres}>
                <ul>
                    <li className={Style.homeabxtit}>Home</li>
                    <li className={Style.componto}>Higiene Pessoal</li>
                </ul>
            </nav>
            <HigienePessoalProps/>
        </main>
    )
}

export default HigienePessoal