import Style from '../CSS/AromatizadoresProps.module.css'
import ultratulipa from '../imagens/aromatizadores/Mockup_Aromatizador_caixa_cinza.jpg'
import arvoredavida from '../imagens/aromatizadores/colar_difusor_pessoal_rvore_da_vida.jpg'
import mandala from '../imagens/aromatizadores/colar_difusor_pessoal_mandala.jpg'
import difusor from '../imagens/aromatizadores/Mockup_Difusor_de_Aromas_Caixa_cinza.jpg'
import coracao from '../imagens/aromatizadores/aromatizador_pessoal_coracao_rosa_-_ceramica_-_phytoterapica.jpg'
import caldeirao from '../imagens/aromatizadores/aromatizador_pessoal_caldeirao_azul_-_ceramica_-_phytoterapica.jpg'
import cuia from '../imagens/aromatizadores/aromatizador_ultrassonico.jpg'
import lotus from '../imagens/aromatizadores/colar_difusor_pessoal_flor_de_lotus.jpg'

function ComponenteProps(){
    return(
        <main className={Style.maincaixas}>
            <section className={Style.sectcaixas}>
                <div className={Style.caixas1}>
                    <nav>
                        <img className={Style.imgcaixa} src={ultratulipa}/>
                        <aside className={Style.caixadescricao}>
                            <p className={Style.legendaimg}>Aromatizador Ultrassônico Tulipa - 400ml</p>
                            <div className={Style.caixalinhadesconto}>
                            </div>
                            <p className={Style.preco}>R$ 260,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 86,66 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas2}>
                    <nav>
                        <img className={Style.imgcaixa} src={arvoredavida}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Colar Aromatizador Pessoal - Árvore da Vida</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 68,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 22,66 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas3}>
                    <nav>
                        <img className={Style.imgcaixa} src={mandala}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Colar Aromarizador Pessoal - Mandala</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 68,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 22,66 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas4}>
                    <nav>
                        <img className={Style.imgcaixa} src={difusor}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Difusor de Aromas Brisa 110/220V</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 57,60</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 19,20 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas5}>
                    <nav>
                        <img className={Style.imgcaixa} src={coracao}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Colar Aromatizador Pessoal - Coração</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 42,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 14,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas6}>
                    <nav>
                        <img className={Style.imgcaixa} src={caldeirao}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Colar Aromatizador Pessoal - Caldeirão</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 42,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 14,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas7}>
                    <nav>
                        <img className={Style.imgcaixa} src={cuia}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Aromatizador Ultrassônico Cuia - 150ml</p>
                            <div className={Style.caixalinhadesconto}>
                            </div>
                            <p className={Style.preco}>R$ 260,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 86,67 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas8}>
                    <nav>
                        <img className={Style.imgcaixa} src={lotus}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Colar Aromarizador Pessoal - Lótus</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 68,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 22,67 sem juros)</p>
                        </aside>
                    </nav>
                </div>
            </section>
        </main>
    )
}

export default ComponenteProps