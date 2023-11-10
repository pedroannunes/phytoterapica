import logo from '../imagens/photrappng.png'
import Style from '../CSS/HeaderApp.module.css'
import porcent from '../imagens/porcentagem.png'
import usuario from '../imagens/usuario.png'
import carrinho from '../imagens/carrinho.png'
import pesq from '../imagens/pesq-caixa.png'
import { Link } from 'react-router-dom'

function HeaderApp(){
    return(
        <header>
            <Link to='/Inicial'><img className={Style.imglogo} src={logo}/></Link>
            <form className={Style.caixaheader}>
                <input className={Style.caixapesq} type='text' placeholder='O que você procura ?'/>
                <button className={Style.botaodesc}><span className={Style.textopadrao}></span>
                    <img id={Style.imgporcent} src={porcent}/>
                </button>
                <a href='#'><img className={Style.iconshd} src={usuario}/></a>
                <a href='#'><img className={Style.iconshd} src={carrinho}/></a>
            </form>
        </header>
    )
}

export default HeaderApp