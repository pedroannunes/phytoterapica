import Style from '../CSS/OleosEssenciaisProps.module.css'
import lavanda from '../imagens/essenciais/oleo-essencial-lavanda.jpg'
import alecrim from '../imagens/essenciais/oleo-essencial-alecrim.jpg'
import geranio from '../imagens/essenciais/oleo-essencial-geranio.jpg'
import melaleuca from '../imagens/essenciais/oleo-essencial-melaleuca-tea-tree.jpg'
import hortelapimenta from '../imagens/essenciais/oleo-essencial-hortela-pimenta.jpg'
import sandalomyris from '../imagens/essenciais/oleo-essencial-sandalo.jpg'
import lavandabugaria from '../imagens/essenciais/oleo-essencial-lavanda-bulgaria.jpg'
import eucalipto from '../imagens/essenciais/oleo-essencial-eucalipto-globulus.jpg'
import copaiba from '../imagens/essenciais/_leo_essencial_de_copa_ba.jpg'
import bergamota from '../imagens/essenciais/oleo-essencial-bergamota.jpg'
import limao from '../imagens/essenciais/oleo-essencial-limao-siciliano.jpg'
import patchouli from '../imagens/essenciais/oleo-essencial-patchouli.jpg'

function ComponenteProps(){
    return(
        <main className={Style.maincaixas}>
            <section className={Style.sectcaixas}>
                <div className={Style.caixas1}>
                    <nav>
                        <img className={Style.imgcaixa} src={lavanda}/>
                        <aside className={Style.caixadescricao}>
                            <p className={Style.legendaimg}>Óleo Essencial de Lavanda (gt. França) - 10ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 60,00</p>
                                
                            </div>
                            <p className={Style.preco}>R$ 51,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 17,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas2}>
                    <nav>
                        <img className={Style.imgcaixa} src={alecrim}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Alecrim (qt. Cineol) - 10ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 41,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 13,66 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas3}>
                    <nav>
                        <img className={Style.imgcaixa} src={geranio}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Gerânio - 5ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 48,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 16,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas4}>
                    <nav>
                        <img className={Style.imgcaixa} src={melaleuca}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Melaleuca (Tea Tree) - 10ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 52,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 17,33 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas5}>
                    <nav>
                        <img className={Style.imgcaixa} src={hortelapimenta}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 50,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 16,66 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas6}>
                    <nav>
                        <img className={Style.imgcaixa} src={sandalomyris}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Sândalo Amyris - 5ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 63,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 21,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas7}>
                    <nav>
                        <img className={Style.imgcaixa} src={lavandabugaria}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Lavanda (gt. Bulgária) - 10ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 60,00</p>
                            </div>
                            <p className={Style.preco}>R$ 51,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 17,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas8}>
                    <nav>
                        <img className={Style.imgcaixa} src={eucalipto}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Eucalipto Globulus - 10ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 35,20</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 11,73 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas9}>
                    <nav>
                        <img className={Style.imgcaixa} src={copaiba}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Copaiba - 10ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 52,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 17,33 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas10}>
                    <nav>
                        <img className={Style.imgcaixa} src={bergamota}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Bergamota - 5ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 50,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 16,66 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas11}>
                    <nav>
                        <img className={Style.imgcaixa} src={limao}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Limão - 10ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 33,80</p>
                            </div>
                            <p className={Style.preco}>R$ 27,30</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 9,10 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas12}>
                    <nav>
                        <img className={Style.imgcaixa} src={patchouli}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Essencial de Patchouli - 5ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 50,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 16,66 sem juros)</p>
                        </aside>
                    </nav>
                </div>
            </section>
        </main>
    )
}

export default ComponenteProps