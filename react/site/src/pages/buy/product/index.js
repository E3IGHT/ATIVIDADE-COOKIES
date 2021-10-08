import { GGGG } from "./styled";
import { Calculadora } from "../calculator/styled"
import { useState } from "react";


export default function ProductItem (props) {
    const[produto, setProduto] = useState(props.info);

    function remover() {
        props.onRemove(produto.id);
    }

    return (
        <GGGG>
                    <div class="first-part">
                        <div class="image">
                            <img src={produto.imagem} alt="" width= "100px" height="100px" />
                        </div>
                        <Calculadora>
                            <button class="calc"> - </button>
                            <div class="number"> 1 </div>
                            <button class="calc"> + </button>
                        </Calculadora>
                    </div>
                    <div class="product-title"> {produto.titulo} </div>
                    <div class="price">
                        <div class="price-title"> Preço Unitário </div>
                        <div class="price-desc"> {produto.preco} </div>
                    </div>
                    <div class="qtd">
                        <div class="qtd-title"> Quant. : </div>
                        <div class="qtd-value"> 1 </div>
                    </div>

                    <div class="trash">
                        <img src="/assets/images/trash-2.svg" alt="" onClick={remover} />
                    </div>
        </GGGG>
    )
}