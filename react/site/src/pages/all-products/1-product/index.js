import { Buttons } from "../styled"
import { PROD1 } from "./styled"
import { Link } from 'react-router-dom'

export default function Product (props) {
    return (
    <PROD1>
        <div class="image">
            <img src={props.info.imagem} alt="" width="100px" height="100px" />
        </div>
        <div class="texts">
            <div class="product-title"> {props.info.titulo} </div>
            <div class="product-price"> {props.info.preco} </div>
        </div>
        <div class="button-details">
            <Link to= {{
                pathname: '/detalhes',
                state: props.info
            }}>
                <Buttons class="see-more"> Ver mais detalhes </Buttons>
            </Link>
        </div>
    </PROD1>
    )
}