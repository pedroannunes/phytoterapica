import { Link } from 'react-router-dom';
import Style from '../CSS/ComponenteLinks.module.css';

function ComponenteLinks() {
  return (
    <section className={Style.caixalinks}>
      <ul className={Style.esquerdo}>
        <li><Link className={Style.link} to='/OleosEssenciais'>ÓLEOS ESSENCIAIS</Link></li>
        <li><Link className={Style.link} to='/OleosVegetais'>ÓLEOS VEGETAIS</Link></li>
        <li><Link className={Style.link} to='/Sinergias'>SINERGIAS</Link></li>
        <li><Link className={Style.link} to='/CosmeticosNaturais'>COSMÉTICOS NATURAIS</Link></li>
        <li><Link className={Style.link} to='/HigienePessoal'>HIGIENE PESSOAL</Link></li>
        <li><Link className={Style.link} to='/Aromatizadores'>AROMATIZADORES</Link></li>
      </ul>
      <ul className={Style.direito}>
        <li><Link className={Style.link} to='/Acessorios'>ACESSÓRIOS</Link></li>
        <li><Link className={Style.link} to='/Ofertas'>OFERTAS</Link></li>
        <li><a className={Style.link} href='#'>CONSULTOR(A)</a></li>
      </ul>
    </section>
  );
}

export default ComponenteLinks;
