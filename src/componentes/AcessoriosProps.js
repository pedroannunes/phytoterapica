import Style from '../CSS/AcessoriosProps.module.css'
import materiallona from '../imagens/acessorios/necessarie_lona_crua_1000x1000px_2.jpg'
import sacolaroxa from '../imagens/acessorios/sacola_roxa.png'
import tricoline from '../imagens/acessorios/necessaire-porta-oleos-pequena-costela-de-adao-phytoterapica-01.jpg'
import sacolaamarela from '../imagens/acessorios/sacola-phytoterapica-g.jpg'
import madeiraclara20 from '../imagens/acessorios/madeira_clara_20.jpg'
import madeiraescura20 from '../imagens/acessorios/caixa_de_madeira_escura.jpg'
import valvula from '../imagens/acessorios/valvula-pump-embalagem-500ml-phytoterapica.jpg'
import presenteavel from '../imagens/acessorios/Mockup_Caixa_Presente_Porta_OleosEssenciais_aberto_comOleos_cinza.jpg'
import madeiraclara35 from '../imagens/acessorios/caixa_de_madeira_clara.jpg'
import madeiraescura35 from '../imagens/acessorios/caixa_de_madeira_escura_-_35_divis_rias_com_al_a_-_phytoterapica_fechada_.jpg'
import sacolavazada from '../imagens/acessorios/sacola-presente-alca-vazada-phytoterapica.jpg'

function ComponenteProps(){
    return(
        <main className={Style.maincaixas}>
            <section className={Style.sectcaixas}>
                <div className={Style.caixas1}>
                    <nav>
                        <img className={Style.imgcaixa} src={materiallona}/>
                        <aside className={Style.caixadescricao}>
                            <p className={Style.legendaimg}>Nécessaire Cor Cru - Material Lona</p>
                            <div className={Style.caixalinhadesconto}>
                            </div>
                            <p className={Style.preco}>R$ 94,40</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 31,46 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas2}>
                    <nav>
                        <img className={Style.imgcaixa} src={sacolaroxa}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Sacola Roxa Phytoterápica</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 2,70</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 0,90 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas3}>
                    <nav>
                        <img className={Style.imgcaixa} src={tricoline}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Nécessaire Estampada Costela de Adão - Material Tricoline</p>
                            <div className={Style.caixalinhadesconto}>
                            </div>
                            <p className={Style.preco}>R$ 67,90</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 22,63 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas4}>
                    <nav>
                        <img className={Style.imgcaixa} src={sacolaamarela}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Sacola Amarela Phytoterápica</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 6,50</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 2,16 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas5}>
                    <nav>
                        <img className={Style.imgcaixa} src={madeiraclara20}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Caixa de Madeira Clara - 20 Divisórias(Sem Alça)</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 195,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 65,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas6}>
                    <nav>
                        <img className={Style.imgcaixa} src={madeiraescura20}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Caixa de Madeira Escura - 20 Divisórias(Sem Alça)</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 195,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 65,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas7}>
                    <nav>
                        <img className={Style.imgcaixa} src={valvula}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Válvula Para Frasco de 500ml</p>
                            <div className={Style.caixalinhadesconto}>
                            </div>
                            <p className={Style.preco}>R$ 6,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 2,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas8}>
                    <nav>
                        <img className={Style.imgcaixa} src={presenteavel}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Caixa Presenteável Porta-Óleos Essenciais</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 18,30</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 6,10 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas9}>
                    <nav>
                        <img className={Style.imgcaixa} src={madeiraclara35}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Caixa de Madeira Clara - 35 Divisórias(Com Alça)</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 231,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 77,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas10}>
                    <nav>
                        <img className={Style.imgcaixa} src={madeiraescura35}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Caixa de Madeira Escura - 35 Dividórias(Com Alça)</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 231,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 77,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas11}>
                    <nav>
                        <img className={Style.imgcaixa} src={sacolavazada}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Sacola Com Alça Vazada Phytoterápica</p>
                            <div className={Style.caixalinhadesconto}>
                            </div>
                            <p className={Style.preco}>R$ 9,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 3,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
            </section>
        </main>
    )
}

export default ComponenteProps