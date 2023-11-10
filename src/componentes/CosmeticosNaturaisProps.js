import Style from '../CSS/CosmeticosNaturaisProps.module.css'
import sanguedragao from '../imagens/naturais/sangue_de_drag_o_conta_gotas_phytoter_pica.jpg'
import argilabranca from '../imagens/naturais/argila_branca_200g_-_phytoterapica.jpg'
import argilaverde from '../imagens/naturais/argila-verde-200g-phytoterapica_2.jpg'
import argilaamarela from '../imagens/naturais/argila_amarela_200g_-_phytoterapica.jpg'
import floralmelaleuca from '../imagens/naturais/melaleuca.jpg'
import argilavermelha from '../imagens/naturais/argila_vermelha_200g_-_phytoterapica.jpg'
import florallemongrass from '../imagens/naturais/lemongrass.jpg'
import baseneutra from '../imagens/naturais/creme_base_neutra_240g_-_phytoterapica.jpg'
import argilapreta from '../imagens/naturais/argila_preta_200g_-_phytoterapica.jpg'
import aloevera from '../imagens/naturais/extrato-aloe-vera-210ml-phytoterapica_1.jpg'
import spraytrue from '../imagens/naturais/mockup-desodorante-vegano-spray-true-60ml-phytoterapica-cartucho-f6f6f6.jpg'
import sprayhill from '../imagens/naturais/mockup-desodorante-vegano-spray-hill-60ml-phytoterapica-cartucho-f6f6f6.jpg'

function ComponenteProps(){
    return(
        <main className={Style.maincaixas}>
            <section className={Style.sectcaixas}>
                <div className={Style.caixas1}>
                    <nav>
                        <img className={Style.imgcaixa} src={sanguedragao}/>
                        <aside className={Style.caixadescricao}>
                            <p className={Style.legendaimg}>Seiva Sangue de Dragão - 10ml</p>
                            <div className={Style.caixalinhadesconto}>
                            </div>
                            <p className={Style.preco}>R$ 54,60</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 18,20 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas2}>
                    <nav>
                        <img className={Style.imgcaixa} src={argilabranca}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Argila Branca - 200g</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 33,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 11,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas3}>
                    <nav>
                        <img className={Style.imgcaixa} src={argilaverde}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Argila Verde - 200g</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 33,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 11,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas4}>
                    <nav>
                        <img className={Style.imgcaixa} src={argilaamarela}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Argila Amarela - 200g</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 33,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 11,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas5}>
                    <nav>
                        <img className={Style.imgcaixa} src={floralmelaleuca}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Hidrolato Água Floral de Melaleuca (Orgânico) - 200ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 54,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 18,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas6}>
                    <nav>
                        <img className={Style.imgcaixa} src={argilavermelha}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Argila Vermelha - 200g</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 33,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 11,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas7}>
                    <nav>
                        <img className={Style.imgcaixa} src={florallemongrass}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Hidrolato Água Floral de Lemongrass (Orgânico) - 200ml</p>
                            <div className={Style.caixalinhadesconto}>
                                <p className={Style.linhadesconto}>R$ 54,00</p>
                            </div>
                            <p className={Style.preco}>R$ 51,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 18,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas8}>
                    <nav>
                        <img className={Style.imgcaixa} src={baseneutra}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Creme Base Neutra - 240g</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 111,10</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 37,03 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas9}>
                    <nav>
                        <img className={Style.imgcaixa} src={argilapreta}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Argila Preta - 200g</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 33,00</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 11,00 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas10}>
                    <nav>
                        <img className={Style.imgcaixa} src={aloevera}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Extrato de Aloe Vera 99,3% - 210ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 76,80</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 25,60 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas11}>
                    <nav>
                        <img className={Style.imgcaixa} src={spraytrue}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Desodorante Vegano Spray True - 60ml</p>
                            <div className={Style.caixalinhadesconto}>
                            </div>
                            <p className={Style.preco}>R$ 49,80</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 16,60 sem juros)</p>
                        </aside>
                    </nav>
                </div>
                <div className={Style.caixas12}>
                    <nav>
                        <img className={Style.imgcaixa} src={sprayhill}/>
                        <aside className={Style.caixapreco}>
                            <p className={Style.legendaimg}>Desodorante Vegano Spray Hill - 60ml</p>
                            <div className={Style.caixalinhadesconto}></div>
                            <p className={Style.preco}>R$ 49,80</p>
                            <p className={Style.textoparcela}>(ou em até 3x de R$ 16,60 sem juros)</p>
                        </aside>
                    </nav>
                </div>
            </section>
        </main>
    )
}

export default ComponenteProps