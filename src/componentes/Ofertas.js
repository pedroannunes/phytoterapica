import { useEffect } from 'react'
import Style from '../CSS/Ofertas.module.css'
import OfertasProps from './OfertasProps'

function Ofertas(){
    useEffect(() => {
        document.title = "Ofertas - Phytoterapica";
      }, []);
    return(
        <main>
            <section className={Style.resumolink}>
                <h1 className={Style.tituloh1}>Ofertas</h1>
                <p className={Style.subtitp}>Ofertas</p>
            </section>
            <nav className={Style.linkabxres}>
                <ul>
                    <li className={Style.homeabxtit}>Home</li>
                    <li className={Style.componto}>Ofertas</li>
                </ul>
            </nav>
            <OfertasProps/>
        </main>
    )
}

export default Ofertas