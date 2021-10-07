import {  useState } from 'react'
import './index.css'

 export default function Calculadora () {
    const [qtd, setQtd] = useState(0);

    function contar () {
        setQtd(qtd + 1 )
    }

    function resetar () {
        setQtd(0);
    }


    return (
        <div className="container"> 
            <h1> Contador </h1>
            <div> {qtd} </div>
            <button onClick={contar}> Contar </button>
            <ResetCalculadora onReset={resetar} />
        </div>
    )
}

function ResetCalculadora (props) {

    function resetar() {
        props.onReset(0)
    }

    return (
        <div className="container">
            <button onClick={resetar}> Resetar </button>
        </div>
    )
}