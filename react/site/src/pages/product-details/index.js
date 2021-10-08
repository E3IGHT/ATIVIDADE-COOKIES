import { useState } from "react"
import { BB4 } from "./styled"
import { Buttons } from '../all-products/styled'
import { Link, useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

export default function Detalhes (props) {
    const [produto, setProduto] = useState(props.location.state);
    const navigation = useHistory();

    function comprar () {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined
                ? JSON.parse(carrinho)
                : [];

            
            if (carrinho.some(item => item.id === produto.id) === false )
                carrinho.push({...produto, qtd: 1});

            
            Cookie.set('carrinho', JSON.stringify(carrinho));

                navigation.push('/carrinho');     
    }

    return (
        <BB4>
        <div class="return"> <Link to="/"> Voltar </Link> </div>
        <div class="title"> Sobre o produto </div>
            <div class="boxes">
                <div class="first-box">
                    <div class="image">
                        <img src={produto.imagem} alt="" width="150px" height="150px"/>
                    </div>
                    <div class="product-title"> {produto.titulo} </div>
                    <div class="product-price"> {produto.preco} </div>
                </div>
                <div class="first-box">
                    <div class="product-desc"> <b> Descrição: </b> {produto.descricao} </div>
                    <div class="product-desc"> <b> Especificações: </b> {produto.especificacoes} </div>
                    <div class="button-buy">
                        <Buttons class="but" onClick={comprar}> Comprar </Buttons>
                    </div>
                </div>
            </div>
    </BB4>
    )
}