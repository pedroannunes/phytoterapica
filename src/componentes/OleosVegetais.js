import { useEffect } from 'react'
import Style from '../CSS/OleosVegetais.module.css'
import OleosVegetaisProps from './OleosVegetaisProps'

function OleosVegetais(){
    useEffect(() => {
        document.title = "Oleos Vegetais - Phytoterapica";
      }, []);
    return(
        <main>
            <section className={Style.resumolink}>
                <h1 className={Style.tituloh1}>Óleos Vegetais</h1>
                <p className={Style.subtitp}>Óleos vegetais são gorduras extraídas de grãos, sementes e polpas de frutos. São formados por ácidos graxos a maior parte insaturados, que são os ômega 3, 6 e 9 e vitaminas A, D e E, dentre outras substâncias.</p>
            </section>
            <nav className={Style.linkabxres}>
                <ul>
                    <li className={Style.homeabxtit}>Home</li>
                    <li className={Style.componto}>Óleos Vegetais</li>
                </ul>
            </nav>
            <OleosVegetaisProps/>
        </main>
    )
}

export default OleosVegetais