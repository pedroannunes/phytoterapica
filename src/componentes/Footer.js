import { Link } from 'react-router-dom'
import Style from '../CSS/Footer.module.css'
import vegano from '../imagens/vegano-green-icon___d50a3a256608558fb7a5b436f9296b04.svg'
import cruelty from '../imagens/pata-green-icon___7274cf6f262f688870f559e8bb5cb80a.svg'
import puro from '../imagens/gotas-green-icon___78ef54dd5aebcddbe542cb86e3d95971.svg'
import mastercard from '../imagens/Mastercard.png' 
import visa from '../imagens/Visa___5a79be7503222d4f301704d18617bf9c.jpg'
import americanxpress from '../imagens/Diners___0bc0f6a1ecf82764a1ee09288c188aa0.jpg'
import elo from '../imagens/Elo___a2d768f67af865a10c3fb739dc742658.jpg'
import hypercard from '../imagens/Hiper___658b71e8411115a860ee510afe937605.jpg'
import pix from '../imagens/c92e2d19-ecd6-4787-a561-95d4c17f7171___89de1d94e84a932e246c35b5814ccf05.jpg'
import logo from '../imagens/photrappng.png'
import instagram from '../imagens/iconeinstagram.png'
import facebook from '../imagens/iconefacebook.png'
import blog from '../imagens/iconeblog.png'
import youtube from '../imagens/iconeyoutube.png'
import twitter from '../imagens/iconetwitter.png'
import vtex from '../imagens/d1b3a844-8389-49f5-8075-6a8683bf8e21___649355153838534611d5753a1d50c178.png'
import googlesafe from '../imagens/google-safe___c9ebc8c61f22a0f2ee9ae795918bb82b.jpg'
import eureciclo from '../imagens/74971d19-64ab-4f1e-9183-b072d6dd89a2___0451d49b6346651dd3755db3e232f758.png'
import godaddy from '../imagens/selo-godaddy___32f58289d2c35f8a8e70d70a3fdf13f9.jpg'

function Footer(){
    return(
        <main>
            <div className={Style.caixainscricao}>
                <div className={Style.inscrevase}>
                    <h1>INSCREVA-SE</h1>
                    <p>E RECEBA NOVIDADES E PROMOÇÕES</p>
                </div>
                <form>
                    <input className={Style.caixaemail} type="email" name="email" placeholder='Seu e-mail' required/>
                    <button className={Style.caixabotao} type='submit'>ASSINAR NEWSLETTER</button>
                </form>
            </div>
            <div className={Style.abaixoinscrevase}>
                <div className={Style.vegano}>
                    <img src={vegano} alt='vegano'/>
                    <div className={Style.textovegano}>
                        <h2>Vegano</h2>
                        <p>sem componentes de origem animal</p>
                    </div>
                </div>
                <hr/>
                <div className={Style.cruelty}>
                    <img src={cruelty} alt='crueltyFree'/>
                    <div className={Style.textocruelty}>
                        <h2>Cruelty-Free</h2>
                        <p>não testado em animais</p>
                    </div>
                </div>
                <hr/>
                <div className={Style.puro}>
                    <img src={puro} alt='100%puro'/>
                    <div className={Style.textopuro}>
                        <h2>100% Puro</h2>
                        <p>óleos puros e naturais</p>
                    </div>
                </div>
            </div>
            <div className={Style.footerlistas}>
                <div className={Style.sobre}>
                    <ul className={Style.ulfooter}>
                        <h5>Sobre</h5>
                        <li><a href='https://loja.phytoterapica.com.br/quem-somos' target='_blank'>Quem Somos (A Empresa)</a></li>
                        <li><a href='https://loja.phytoterapica.com.br/nossos-contatos' target='_blank'>Nossos Contatos</a></li>
                        <li><a href='https://loja.phytoterapica.com.br/trabalhe-conosco' target='_blank'>Trabalhe Conosco</a></li>
                        <li><a href='https://loja.phytoterapica.com.br/fale-conosco' target='_blank'>Fale Conosco (SAC)</a></li>
                        <li><a href='https://loja.phytoterapica.com.br/seja-nossa-consultora' target='_blank'>Consultora</a></li>
                        <li><a href='https://loja.phytoterapica.com.br/compre-por-atacado' target='_blank'>Atacado</a></li>
                    </ul>
                </div>
                <div className={Style.suporte}>
                    <ul className={Style.ulfooter}>
                        <h5>Suporte</h5>
                        <li><a href='https://loja.phytoterapica.com.br/politica-de-entrega' target='_blank'>Política de Entrega</a></li>
                        <li><a href='https://loja.phytoterapica.com.br/politica-de-troca-e-devolucao' target='_blank'>Política de Troca e Devolução</a></li>
                        <li><a href='https://loja.phytoterapica.com.br/ingestao-de-oleos-essenciais' target='_blank'>Ingestão de Óleos Essenciais</a></li>
                        <li><a href='https://loja.phytoterapica.com.br/cromatografia' target='_blank'>Cromatofrafia</a></li>
                    </ul>
                    <ul className={Style.texto2}>
                        <li><a href='mailto:privacidade@phytoterapica.com.br' >Encarregado de Dados - JKD ME</a></li>
                        <li><a href='mailto:privacidade@phytoterapica.com.br' >privacidade@phytoterapica.com.br</a></li>
                    </ul>
                </div>
                <div className={Style.areacliente}>
                    <ul className={Style.ulfooter}>
                        <h5>Área do Cliente</h5>
                        <li><a href='https://loja.phytoterapica.com.br/login' target='_blank'>Login</a></li>
                        <li><a href='https://loja.phytoterapica.com.br/checkout/#/cart' target='_blank'>Carrinho</a></li>
                        <li><a href='https://loja.phytoterapica.com.br/login?returnUrl=%2Faccount' target='_blank'>Minha Conta</a></li>
                        <li><a href='https://loja.phytoterapica.com.br/login?returnUrl=%2Faccount%23%2Forders' target='_blank'>Meus Pedidos</a></li>
                        <li><a href='#'>Preferências de Cookies</a></li>
                    </ul>
                </div>
                <div className={Style.formaspagamentos}>
                    <h5>Formas de Pagamentos</h5>
                    <div className={Style.imagenspagamentos}>
                        <img src={mastercard} alt='mastercard'/>
                        <img src={visa} alt='visa'/>
                        <img src={americanxpress} alt='americanxpress'/>
                        <img src={elo} alt='elo'/>
                        <img src={hypercard} alt='mhipercard'/>
                        <img src={pix} alt='pix'/>
                    </div>
                </div>
                <div className={Style.caixalogoredessociais}>
                    <img className={Style.imglogo} src={logo} alt='logo_footer'/>
                    <div className={Style.iconesredesociais}>
                        <a href='https://www.instagram.com/phytoterapicabrasil/' target='_blank'><img className={Style.instahover} src={instagram} alt='instagram'/></a>
                        <a href='https://www.facebook.com/phytoterapica/?epa=SEARCH_BOX' target='_blank'><img src={facebook} alt='facebook'/></a>
                        <a href='https://blog.phytoterapica.com.br/' target='_blank'><img src={blog} alt='blog'/></a>
                        <a href='https://www.youtube.com/phytoterapicabrasil' target='_blank'><img src={youtube} alt='youtube'/></a>
                        <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fphytoterapica' target='_blank'><img src={twitter} alt='twitter'/></a>
                    </div>
                    <div className={Style.imgabaixoicones}>
                        <img className={Style.imgvtex} src={vtex}/>
                        <img className={Style.imggooglesafe} src={googlesafe}/>
                        <img className={Style.imgeureciclo} src={eureciclo}/>
                        <img className={Style.imggodaddy} src={godaddy}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Footer