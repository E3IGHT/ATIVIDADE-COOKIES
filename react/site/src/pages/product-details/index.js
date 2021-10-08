import { useState } from "react"
import { BB4 } from "./styled"
import { Buttons } from '../all-products/styled'
import {  Link } from 'react-router-dom'

export default function Detalhes (props) {
    const [produto, setProduto] = useState(props.location.state)

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
                        <Buttons class="but"> Comprar </Buttons>
                    </div>
                </div>
            </div>
    </BB4>
    )
}