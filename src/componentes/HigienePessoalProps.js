import Style from '../CSS/HigienePessoalProps.module.css'
import lavanda from '../imagens/pessoal/sabonete_lavanda_e_rosa_mosqueta_100g_-_phytoterapica_1_.jpg'
import ylangcoco from '../imagens/pessoal/Mockup_Sabonete_Caixa_Ylang_Ylang_cinza.jpg'
import melaleucagergelim from '../imagens/pessoal/sabonete_melaleuca_gergelim_conj2.jpg'
import sanguedragao from '../imagens/pessoal/Mockup-Gel-Dental-Sangue-de-Dragao-Ecommerce.jpg'
import limaosiciliano from '../imagens/pessoal/Mockup_Sabonete_Caixa_Limao_Siciliano_cinza.jpg'
import kitsabonetes from '../imagens/pessoal/Kit_Miniaturas_Sabonetes_1000x1000px_Cinza.jpg'
import lemongrassabacate from '../imagens/pessoal/sabonete-lemongrass-abacate_100g_phytoterapica_b.jpg'
import mentatrigo from '../imagens/pessoal/sabonete_menta_e_germe_de_trigo_100g_-_phytoterapica_1_.jpg'
import herbalinfantil from '../imagens/pessoal/gel-dental-infantil-phytoterapica-50g-b.jpg'
import bucalherbal from '../imagens/pessoal/enxaguante_bucal_herbal_250ml_-_phytoterapica_1.jpg'
import herbaladulto from '../imagens/pessoal/creme-dental-herbal-adulto-80g-phytoterapica-01.jpg'

function ComponenteProps(){
    return(
        <main className={Style.maincaixas}>
            <section className={Style.sectcaixas}>
                <div className={Style.caixas1}>
                    <nav>
                        <img className={Style.imgcaixa} src={lavanda}/>
                        <aside className={Style.caixadescricao}>
                            <p className={Style.legendaimg}>Sabonete de Lavanda & Rosa Mosqueta - 100g</p>
                            <p className={Style.preco}>R$ 21,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 7,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas2}>
                    <nav>
                        <img className={Style.imgcaixa} src={ylangcoco}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Sabonete Esfoliate Ylang Ylang & Coco - 100g</p>
                            <p className={Style.preco}>R$ 21,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 7,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas3}>
                    <nav>
                        <img className={Style.imgcaixa} src={melaleucagergelim}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Sabonete de Melaleuca & Gergelim - 100g</p>
                            <p className={Style.preco}>R$ 21,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 7,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas4}>
                    <nav>
                        <img className={Style.imgcaixa} src={sanguedragao}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Gel Dental Sangue de Dragão - 90g</p>
                            <p className={Style.preco}>R$ 30,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 10,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas5}>
                    <nav>
                        <img className={Style.imgcaixa} src={limaosiciliano}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Sabonete de Limão-Siciliano & Semente de Uva - 100g</p>
                            <p className={Style.preco}>R$ 21,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 7,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas6}>
                    <nav>
                        <img className={Style.imgcaixa} src={kitsabonetes}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Kit Miniaturas Sabonetes Vegetais</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 52,00</p>
                            </div>
                            <p className={Style.precoprodutodesconto}>R$ 44,20</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 14,73 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas7}>
                    <nav>
                        <img className={Style.imgcaixa} src={lemongrassabacate}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Sabonete de Lemongrass & Abacate - 100g</p>
                            <p className={Style.preco}>R$ 21,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 7,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas8}>
                    <nav>
                        <img className={Style.imgcaixa} src={mentatrigo}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Sabonete de Menta & Germe de Trigo - 100g</p>
                            <p className={Style.preco}>R$ 21,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 7,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas9}>
                    <nav>
                        <img className={Style.imgcaixa} src={herbalinfantil}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Gel Dental Herbal Infantil - 50g</p>
                            <p className={Style.preco}>R$ 22,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 7,33 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas10}>
                    <nav>
                        <img className={Style.imgcaixa} src={bucalherbal}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Enxaguante Bucal Herbal - 250g</p>
                            <p className={Style.preco}>R$ 30,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 10,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas11}>
                    <nav>
                        <img className={Style.imgcaixa} src={herbaladulto}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Creme Dental Herbal Adulto - 80g</p>
                            <p className={Style.preco}>R$ 25,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 8,33 sem juros)</p>
                        </aside>
                    </nav>
                </div>
            </section>
        </main>
    )
}

export default ComponenteProps