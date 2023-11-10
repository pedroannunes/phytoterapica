import React from 'react';
import Style from '../CSS/Inicial.module.css';
import caixa from '../imagens/Imagens-Carrosel-Inicial/caixa presente.webp';
import consultores from '../imagens/Imagens-Carrosel-Inicial/consultores.webp';
import difusor from '../imagens/Imagens-Carrosel-Inicial/difusor.webp';
import maisvoce from '../imagens/Imagens-Carrosel-Inicial/mais voce ganha.webp';
import veganismo from '../imagens/Imagens-Carrosel-Inicial/veganismo-frascos.webp';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import pix from '../imagens/icone-pix.svg'
import folha from '../imagens/folha branca.svg';
import gotas from '../imagens/gotas branca.svg';
import carro from '../imagens/carrinho-frete.svg';
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
import kitoleos from '../imagens/imagem-kit_OLEOS_ESSENCIAIS.jpg';
import aromatizadortulipa from '../imagens/imagem-article.webp';
import { useEffect } from 'react';
import imghigiene from '../imagens/Inicial - HIGIENE PESSOAL.webp';
import imgacessoriosexcl from '../imagens/INICIAL - ACESSÓRIOS EXCLUSIVOS.webp';
import Equilibrium from '../imagens/sinergias/composto-essencial-equilibrium.jpg'
import Citrinos from '../imagens/sinergias/composto-essencial-citrinos.jpg'
import doshavata from '../imagens/sinergias/E-commerce_Mockups.jpg'
import Enfance from '../imagens/sinergias/composto-essencial-enfance.jpg'
import doshakapha from '../imagens/sinergias/E-commerce_Mockups2.jpg'
import doshapita from '../imagens/sinergias/E-commerce_Mockups3.jpg'
import defense from '../imagens/sinergias/mockup_Defense_com_caixa.jpg'
import harmonize from '../imagens/sinergias/composto-essencial-harmonize-rollon.jpg'

function Inicial(){
    useEffect(() => {
        document.title = "Phytoterapica - aromateriapia, óleos essenciais e óleos vegetais";
      }, []);

    return(
        <main>
            <div className={Style.caixacarrosel}>
                <Carousel interval={4500}>
                    <Carousel.Item>
                            <img src={veganismo} alt='veganismo' style={{width: '100%', height: '430px'}}/>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img src={difusor} alt='difusor' style={{width: '100%'}}/>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img src={maisvoce} alt='oferta' style={{width: '100%'}}/>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img src={caixa} alt='caixa-presente' style={{width: '100%'}}/>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img src={consultores} alt='consultores' style={{width: '100%'}}/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={Style.abaixocarrosel}>
                <div className={Style.caixaabaixocarrosel}>
                    <div>
                        <img className={Style.piximg} src={pix} alt='pix'/>
                    </div>
                    <div>
                        <h4 className={Style.h4abaixocarrosel}>5% De Desconto</h4>
                        <p className={Style.pabaixocarrosel}>para pagamentos à vista no Pix</p>
                    </div>
                </div>
                <div className={Style.caixaabaixocarrosel}>
                <div>
                        <img src={folha} alt='pix'/>
                    </div>
                    <div>
                        <h4 className={Style.h4abaixocarrosel}>Vegano</h4>
                        <p className={Style.pabaixocarrosel}>sem componentes de origem animal</p>
                    </div>
                </div>
                <div className={Style.caixaabaixocarrosel}>
                <div>
                        <img src={gotas} alt='pix'/>
                    </div>
                    <div>
                        <h4 className={Style.h4abaixocarrosel}>100% Puro</h4>
                        <p className={Style.pabaixocarrosel}>óleos puros e naturais</p>
                    </div>
                </div>
                <div className={Style.caixaabaixocarrosel}>
                <div>
                        <img src={carro} alt='pix'/>
                    </div>
                    <div>
                        <h4 className={Style.h4abaixocarrosel}>Frete Grátis <br/> Para Todo O Brasil</h4>
                        <p className={Style.pabaixocarrosel}>em compras acima de R$ 200</p>
                    </div>
                </div>
            </div>
            <div className={Style.palavradestaques}>
                <h2> Destaques </h2>
            </div>
            <Carousel>
                <Carousel.Item>
                <div className={Style.maincaixas}>
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
                    </section>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className={Style.maincaixas}>
                    <section className={Style.sectcaixas}>
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
                    </section>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={Style.maincaixas}>
                        <section className={Style.sectcaixas}>
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
                </div>
                </Carousel.Item>
            </Carousel>
            <div className={Style.imgkitoleos}>
                <a href='https://loja.phytoterapica.com.br/kit-oleos-essenciais-basicos/p'><img src={kitoleos} alt='kitoleosessenciais'/></a>
            </div>
            <article className={Style.articleinicial}>
                <div className={Style.textosarticle}>
                    <h4>Aromatizador Ultrassônico Tulipa</h4>
                    <i><h4 className={Style.h4article}>Desfrute dos aromas e benefícios dos óleos essenciais!</h4></i>
                    <p className={Style.p_article}>Você está procurando por uma maneira eficaz e simples de desfrutar dos aromas e benefícios dos óleos essenciais? Apresentamos esse incrível difusor de aromas! Com a tecnologia de ondas ultrassônicas, ele vaporiza água e óleo essencial em instantes, criando uma névoa fria que se espalha suavemente pelo ambiente, proporcionando uma experiência única e agradável.</p>
                    <a href='https://loja.phytoterapica.com.br/aromatizador-ultrassonico-tulipa-400ml/p'><input className={Style.botaoconheca} type='submit' value='CONHEÇA'/></a>
                </div>
                <div className={Style.imgarticleinicial}>
                    <a href='https://loja.phytoterapica.com.br/aromatizador-ultrassonico-tulipa-400ml/p'><img src={aromatizadortulipa} alt='aromatizador'/></a>
                </div>
            </article>
            <section className={Style.imgabaixoarticle}>
                <a href='https://loja.phytoterapica.com.br/higiene-pessoal?utm_source=loja_virtual&utm_medium=banner_lv&utm_campaign=banner_categoria_higiene_pessoal'><img src={imghigiene} alt='Produtos para higiene pessoal'/></a>
                <a href='https://loja.phytoterapica.com.br/aromatizadores?utm_source=loja_virtual&utm_medium=banner_lv&utm_campaign=banner_categoria_aromatizadores'><img src={imgacessoriosexcl} alt='Ofertas exlusivas'/></a>
            </section>
            <div className={Style.palavralancamento}>
                <p> Lançamentos </p>
            </div>
            <Carousel className={Style.ultimocarrosel}>
                <Carousel.Item>
                <div className={Style.maincaixas}>
                    <section className={Style.sectcaixas}>
                        <div className={Style.caixas13}>
                            <nav>
                                <img className={Style.imgcaixa} src={Equilibrium}/>
                                <aside className={Style.caixadescricao}>
                                    <p className={Style.legendaimg}>Composto Essencial Equilibrium - 15ml</p>
                                    <div className={Style.caixalinhadesconto}>
                                    </div>
                                    <p className={Style.preco}>R$ 88,00</p>
                                    <p className={Style.textoparcela}>(ou em até 3x de R$ 29,33 sem juros)</p>
                                </aside>
                            </nav>
                        </div>
                        <div className={Style.caixas14}>
                            <nav>
                                <img className={Style.imgcaixa} src={Citrinos}/>
                                <aside className={Style.caixapreco}>
                                    <p className={Style.legendaimg}>Composto Essencial Citrinos - 15ml</p>
                                    <div className={Style.caixalinhadesconto}></div>
                                    <p className={Style.preco}>R$ 80,00</p>
                                    <p className={Style.textoparcela}>(ou em até 3x de R$ 26,66 sem juros)</p>
                                </aside>
                            </nav>
                        </div>
                        <div className={Style.caixas15}>
                            <nav>
                                <img className={Style.imgcaixa} src={doshavata}/>
                                <aside className={Style.caixapreco}>
                                    <p className={Style.legendaimg}>Óleo de Massagem Para Dosha Vata - 100ml</p>
                                    <div className={Style.caixalinhadesconto}></div>
                                    <p className={Style.preco}>R$ 70,00</p>
                                    <p className={Style.textoparcela}>(ou em até 3x de R$ 23,33 sem juros)</p>
                                </aside>
                            </nav>
                        </div>
                        <div className={Style.caixas16}>
                            <nav>
                                <img className={Style.imgcaixa} src={Enfance}/>
                                <aside className={Style.caixapreco}>
                                    <p className={Style.legendaimg}>CompostoEssencial Inspire Enfance - 15ml</p>
                                    <div className={Style.caixalinhadesconto}></div>
                                    <p className={Style.preco}>R$ 68,00</p>
                                    <p className={Style.textoparcela}>(ou em até 3x de R$ 22,66 sem juros)</p>
                                </aside>
                            </nav>
                        </div>
                    </section>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className={Style.maincaixas}>
                        <section className={Style.sectcaixas}>
                            <div className={Style.caixas17}>
                        <nav>
                            <img className={Style.imgcaixa} src={doshakapha}/>
                            <aside className={Style.caixapreco}>
                                <p className={Style.legendaimg}>Óleo de Massagem Para Dosha Kapha - 100ml</p>
                                <div className={Style.caixalinhadesconto}></div>
                                <p className={Style.preco}>R$ 70,00</p>
                                <p className={Style.textoparcela}>(ou em até 3x de R$ 23,33 sem juros)</p>
                            </aside>
                        </nav>
                    </div>
                    <div className={Style.caixas18}>
                        <nav>
                            <img className={Style.imgcaixa} src={doshapita}/>
                            <aside className={Style.caixapreco}>
                                <p className={Style.legendaimg}>Óleo de Massagem Para Dosha Pitta - 100ml</p>
                                <div className={Style.caixalinhadesconto}></div>
                                <p className={Style.preco}>R$ 70,00</p>
                                <p className={Style.textoparcela}>(ou em até 3x de R$ 23,33 sem juros)</p>
                            </aside>
                        </nav>
                    </div>
                    <div className={Style.caixas19}>
                        <nav>
                            <img className={Style.imgcaixa} src={defense}/>
                            <aside className={Style.caixapreco}>
                                <p className={Style.legendaimg}>Composto Essencial Defense - 15ml</p>
                                <div className={Style.caixalinhadesconto}>
                                </div>
                                <p className={Style.preco}>R$ 70,00</p>
                                <p className={Style.textoparcela}>(ou em até 3x de R$ 23,33 sem juros)</p>
                            </aside>
                        </nav>
                    </div>
                    <div className={Style.caixas20}>
                        <nav>
                            <img className={Style.imgcaixa} src={harmonize}/>
                            <aside className={Style.caixapreco}>
                                <p className={Style.legendaimg}>Composto Essencial Harmonize Roll-On - 10ml</p>
                                <div className={Style.caixalinhadesconto}></div>
                                <p className={Style.preco}>R$ 54,00</p>
                                <p className={Style.textoparcela}>(ou em até 3x de R$ 18,00 sem juros)</p>
                            </aside>
                        </nav>
                    </div>
                    </section>
                </div>
                </Carousel.Item>
            </Carousel>
        </main>
    )
}

export default Inicial