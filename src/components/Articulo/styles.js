import styled, {css} from "styled-components"; //css es una propiedad de style components que nos permite aplicarle un nuevo css a container o cualquiera
//si se cumple la condicion

//Exportamos de forma nombrada cada una de las etiquetas estiladas

export const Container = styled.article`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin-bottom: 30px;
    padding: 20px;
    text-align: center;
    width: 450px;
    ${props => props.borderRed && css`
        border: 1px solid red;
    `}
`

export const Image = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height:250px;
    ${props => css`
        background-image: url(${props.imagen})
    `}
`

export const ProductName = styled.h4`
    font-size: 22pt;
    margin-bottom: 0;
`

export const Price = styled.p`
    color: #4c4c4c;
    font-size: 18pt;
    margin-top: 4px;
    
`