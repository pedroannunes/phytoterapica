import Style from '../CSS/OleosVegetaisProps.module.css'
import rosamosqueta30 from '../imagens/vegetais/_leo_vegetal_de_rosa_mosqueta.jpg'
import sementeuva from '../imagens/vegetais/oleo-vegetal-semente-de-uva.jpg'
import camomila from '../imagens/vegetais/extrato_oleoso_de_camomila_alem.jpg'
import jojoba from '../imagens/vegetais/_leo_vegetal_de_jojoba.jpg'
import abacate from '../imagens/vegetais/Mockup_Cartucho_OV_Abacate_cinz.jpg'
import Girassol from '../imagens/vegetais/Mockup-OV-girassol-com-caixa.jpg'
import maracuja from '../imagens/vegetais/oleo-vegetal-maracuja.jpg'
import rosamosquetaroll from '../imagens/vegetais/_leo_vegetal_de_rosa_mosqueta_roll_on.jpg'
import sementeuva500 from '../imagens/vegetais/semente-uva-2.jpg'
import rosamosqueta10 from '../imagens/vegetais/_leo_vegetal_de_rosa_mosqueta_10ml.jpg'
import copaiba50 from '../imagens/vegetais/Mockup_Caixa_OV_Copaiba.jpg'
import copaiba20 from '../imagens/vegetais/b_lsamo_de_copa_ba_20ml_-_phytoterapica (1).jpg'

function ComponenteProps(){
    return(
        <main className={Style.maincaixas}>
            <section className={Style.sectcaixas}>
                <div className={Style.caixas1}>
                    <nav>
                        <img className={Style.imgcaixa} src={rosamosqueta10}/>
                        <aside className={Style.caixadescricao}>
                            <p className={Style.legendaimg}>Óleo Vegetal de Rosa Mosqueta - 10ml</p>
                            <div className={Style.caixalinhadesconto}>
                            </div>
                            <p className={Style.preco}>R$ 48,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 16,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas2}>
                    <nav>
                        <img className={Style.imgcaixa} src={sementeuva}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Vegetal de Semente de Uva - 50ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 39,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 13,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas3}>
                    <nav>
                        <img className={Style.imgcaixa} src={camomila}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Extrato Oleoso de Camomila Alemã - 30ml</p>
                            <div className={Style.caixalinhadesconto}>
                            <p className={Style.linhadesconto}>R$ 36,00</p>
                            </div>
                            <p className={Style.preco}>R$ 17,10</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 5,70 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas4}>
                    <nav>
                        <img className={Style.imgcaixa} src={jojoba}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Vegetal de Jojoba - 30ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 72,20</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 24,06 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas5}>
                    <nav>
                        <img className={Style.imgcaixa} src={abacate}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Vegetal de Abacate - 50ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 49,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 16,33 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas6}>
                    <nav>
                        <img className={Style.imgcaixa} src={Girassol}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Vegetal de Girassol - 50ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 31,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 10,33 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas7}>
                    <nav>
                        <img className={Style.imgcaixa} src={maracuja}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Vegetal de Maracujá - 50ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 60,00</p>
                            </div>
                            <p className={Style.preco}>R$ 44,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 14,66 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas8}>
                    <nav>
                        <img className={Style.imgcaixa} src={rosamosquetaroll}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Vegetal de Rosa Mosqueta Roll-on - 10ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 58,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 19,33 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas9}>
                    <nav>
                        <img className={Style.imgcaixa} src={sementeuva500}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Vegetal de Semenre de Uva - 500ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 97,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 17,33 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas10}>
                    <nav>
                        <img className={Style.imgcaixa} src={rosamosqueta30}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Vegetal de Rosa Mosqueta - 30ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 100,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 33,33 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas11}>
                    <nav>
                        <img className={Style.imgcaixa} src={copaiba20}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Vegetal (Bálsamo) de Copaíba - 20ml</p>
                            <div className={Style.caixalinhadesconto}>
                            </div>
                            <p className={Style.preco}>R$ 41,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 13,66 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas12}>
                    <nav>
                        <img className={Style.imgcaixa} src={copaiba50}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Óleo Vegetal (Bálsamo) de Copaíba - 50ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 70,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 23,33 sem juros)</p>
                        </aside>
                    </nav>
                </div>
            </section>
        </main>
    )
}

export default ComponenteProps