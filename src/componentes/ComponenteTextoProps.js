import caminhao from '../imagens/icon-caminhao.png'
import Style from '../CSS/ComponenteTextoProps.module.css'

function ComponenteTextoProps(){
    return(
        <div className={Style.textotopo}>
            <img src={caminhao}/>
            <p className={Style.textop}>Com mais R$ 200,00 o frete é por nossa conta!</p>
        </div>
    )
}

export default ComponenteTextoProps