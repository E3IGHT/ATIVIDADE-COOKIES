import styled from "styled-components";

const BB4 = styled.div `

    padding: 3em 3em;
    background-color: black;
    color: white;

    height: 100vh;

.return {
    text-transform: uppercase;
    font-size: 1em;
}

.title {
    text-align: center;
    font-size: 3em;

    margin-bottom: 3em;
}

.boxes {
    display: flex;
    flex-direction: row;
}

.first-box {
    display: flex;
    flex-direction: column;
     background-color: rgba(196, 196, 196, 0.2);
     padding: 2em;
     margin-left: 2em;
     align-items: center;
     text-align: center;
}

.image {
    margin-bottom: 1em;
}

.product-title {
    font-size: 1.5em;
    font-weight: 800;
}

.product-price {
    font-size: 1em;
}

.product-desc {
    font-size: 1.5em;

    margin-bottom: 2em;
}


`

export { BB4 }