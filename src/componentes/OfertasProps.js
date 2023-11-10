import Style from '../CSS/OfertasProps.module.css'
import oleolavanda3x from '../imagens/ofertas/kit-oleo-essencial-lavanda-phytoterapica_1.webp'
import kitsabonetes from '../imagens/ofertas/kit-sabonetes-vegetais-phytoterapica.webp'
import kitoleos from '../imagens/ofertas/kit-oleos-essenciais-basicos.webp'
import kitargilas from '../imagens/ofertas/kit-argilas-phytoterapica_1.webp'
import kitdeles from '../imagens/ofertas/Kit_Deles_1000x1000px.webp'
import melaleuca3x from '../imagens/ofertas/kit-oleo-essencial-melaleuca-tea-tree-10ml-phytoterapica_1.webp'
import geranio3x from '../imagens/ofertas/kit-3x-oleo-essencial-geranio-5ml-phytoterapica_1.webp'
import hortelapimenta3x from '../imagens/ofertas/kit-3x-oleo-essencial-hortela-pimenta-10ml-phytoterapica.webp'
import bergamota3x from '../imagens/ofertas/kit-3x-oleo-essencial-bergamota-5ml-phytoterapica.webp'
import eucalipto3x from '../imagens/ofertas/kit-3x-oleo-essencial-eucalipto-globulus-10ml-phytoterapica.webp'
import alecrim3x from '../imagens/ofertas/kit-oleo-essencial-alecrim-phytoterapica_1.webp'

function ComponenteProps(){
    return(
        <main className={Style.maincaixas}>
            <section className={Style.sectcaixas}>
                <div className={Style.caixas1}>
                    <nav>
                        <img className={Style.imgcaixa} src={oleolavanda3x}/>
                        <aside className={Style.caixadescricao}>
                            <p className={Style.legendaimg}>Kit 3x Óleo Essencial de Lavanda (gt.França) - 10ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 180,00</p>
                            </div>
                            <p className={Style.preco}>R$ 162,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 54,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas2}>
                    <nav>
                        <img className={Style.imgcaixa} src={kitsabonetes}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Kit Sabonetes Vegetais</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 80,00</p>
                            </div>
                            <p className={Style.preco}>R$ 72,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 24,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas3}>
                    <nav>
                        <img className={Style.imgcaixa} src={kitoleos}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Kit Óleos Essenciais Básicos</p>
                            <div className={Style.caixalinhadesconto}>
                            <p className={Style.linhadesconto}>R$ 147,00</p>
                            </div>
                            <p className={Style.preco}>R$ 132,30</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 44,10 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas4}>
                    <nav>
                        <img className={Style.imgcaixa} src={kitargilas}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Kit Argilas - 200g</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 165,00</p>
                            </div>
                            <p className={Style.preco}>R$ 148,50</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 49,50 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas5}>
                    <nav>
                        <img className={Style.imgcaixa} src={kitdeles}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Kit Deles</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 128,50</p>
                            </div>
                            <p className={Style.preco}>R$ 115,65</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 38,55 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas6}>
                    <nav>
                        <img className={Style.imgcaixa} src={melaleuca3x}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Kit 3x Óleo Essencial de Melaleuca (Tea Tree) - 10ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 150,00</p>
                            </div>
                            <p className={Style.preco}>R$ 135,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 45,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas7}>
                    <nav>
                        <img className={Style.imgcaixa} src={geranio3x}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Kit 3x Óleo Essencial de Gerânio - 5ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 132,00</p>
                            </div>
                            <p className={Style.preco}>R$ 118,80</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 39,60 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas8}>
                    <nav>
                        <img className={Style.imgcaixa} src={hortelapimenta3x}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Kit 3x Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 156,00</p>
                            </div>
                            <p className={Style.preco}>R$ 140,40</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 46,80 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas9}>
                    <nav>
                        <img className={Style.imgcaixa} src={bergamota3x}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Kit 3x Óleo Essencial de Bergamota - 5ml</p>
                            <div className={Style.caixalinhadesconto}>
                               <p className={Style.linhadesconto}>R$ 120,00</p>
                            </div>
                            <p className={Style.preco}>R$ 108,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 36,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas10}>
                    <nav>
                        <img className={Style.imgcaixa} src={eucalipto3x}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Kit 3x Óleo Essencial de Eucalipto Globulus - 10ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 96,00</p>
                            </div>
                            <p className={Style.preco}>R$ 86,40</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 28,80 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas11}>
                    <nav>
                        <img className={Style.imgcaixa} src={alecrim3x}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Kit 3x Óleo Essencial de Alecrim (qt. Cineol) - 10ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 111,00</p>
                            </div>
                            <p className={Style.preco}>R$ 99,90</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 33,30 sem juros)</p>
                        </aside>
                    </nav>
                </div>
            </section>
        </main>
    )
}

export default ComponenteProps