import { useEffect } from 'react'
import OleosEssenciaisProps from './OleosEssenciaisProps'
import Style from '../CSS/OleosEssenciais.module.css'

function OleosEssenciais(){
    useEffect(() => {
        document.title = "Óleos Essenciais - Phytoterapica";
      }, []);
    return(
        <main>
            <section className={Style.resumolink}>
                <h1 className={Style.tituloh1}>Óleos Essenciais</h1>
                <p className={Style.subtitp}>Óleos essenciais são compostos naturais extraídos da parte aromática das plantas, como folhas, flores, galhos, troncos, raízes e casca de frutos.</p>
            </section>
            <nav className={Style.linkabxres}>
                <ul>
                    <li className={Style.homeabxtit}>Home</li>
                    <li className={Style.componto}>Óleos Essenciais</li>
                </ul>
            </nav>
            <OleosEssenciaisProps/>
        </main>
    )
}

export default OleosEssenciais