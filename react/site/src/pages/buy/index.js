import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BBBB } from "./styled"
import ProductItem from "./product"
import Cookie from 'js-cookie'


export default function Carr () {

    const[produtos, setProdutos] = useState([]);


    function carregar () {
        let c = Cookie.get('carrinho')
        c = c !== undefined
            ? JSON.parse(c)
            : [];

        setProdutos(c);
    }

    useEffect(carregar, []);

    function remover (id) {
        let e = produtos.filter(item => item.id !== id )
        Cookie.set('carrinho', JSON.stringify(e));
        setProdutos([...e]);
    }

    return (
        <BBBB>
            <Link to= "/"> Voltar </Link>
            <div class="title"> Carrinho </div>
            <div class="boxes">
            {produtos.map(item =>
                <ProductItem
                 key={item.id} 
                 info={item}
                 onRemove={remover} />  
                )}
            </div>
    </BBBB>
    )
}