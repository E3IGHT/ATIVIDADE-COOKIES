import styled from "styled-components";

const BB1 = styled.div`


    padding: 3em 3em;
    background-color: black;
    color: white;

    height: 100vh;

.title {
    text-align: center;
    font-size: 2.5em;
}

.little-button-list {
    margin-bottom: 4em;
}

.boxes {
   display: flex;
   flex-direction: row;
}

.button-details {

}

`

const Buttons = styled.div`
    border: none;
    color: purple;
    padding: 0.7em;
    font-size: 1em;
    text-transform: uppercase;
    background-color: transparent;
    border: 2px solid purple;
    border-radius: 0.2em;
    cursor: pointer;
`



export { BB1, Buttons }