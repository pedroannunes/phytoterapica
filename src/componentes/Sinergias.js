import { useEffect } from 'react'
import Style from '../CSS/Sinergias.module.css'
import ComponenteProps from './SinergiasProps'

function Sinergias(){
    useEffect(() => {
        document.title = "Sinergias - Phytoterapica";
      }, []);
    return(
        <main>
            <section className={Style.resumolink}>
                <h1 className={Style.tituloh1}>Sinergias</h1>
                <p className={Style.subtitp}>Sinergia é a mistura dos óleos essenciais, um processo criativo que tem como objetivo combinar suas propriedades e componentes. Juntos esses componentes trabalham em equilíbrio e harmonia, intensificando o efeito desejado dessa mistura e potencializando os princípios ativos de cada óleo essencial.</p>
            </section>
            <nav className={Style.linkabxres}>
                <ul>
                    <li className={Style.homeabxtit}>Home</li>
                    <li className={Style.componto}>Sinergias</li>
                </ul>
            </nav>
            <ComponenteProps/>
        </main>
    )
}

export default Sinergias