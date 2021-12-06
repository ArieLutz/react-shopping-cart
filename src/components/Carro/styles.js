import styled from "styled-components";

/**
 * 
 * div (contenedor)                                   ContainerCar
 * button (boton del carro)                           ButtonCar
 * div (Contenedor lista de articulos en el carrito)  ContainerListArticles
 * ul  (Lista de articulos)                           ListArticles
 * li (items de articulos)                            ItemsArticles
 * button (boton de eliminar articulo)                ButtonDelete
 */

export const ContainerCar = styled.div`
    position: relative;
`

export const ButtonCar = styled.button`
    background-color: #118002;
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 10px, 15px;
    cursor: pointer;
`

export const ContainerListArticles = styled.div`
    border-radius: 5px;
    box-shadow: 0, 0, 15px, rgba(0,0,0,0.4);
    background-color: #000;
    padding: 10px;
    position: absolute;
    right: 0px;
    top: 50px;
    width: 400px;
`

export const ListArticles = styled.ul`
    list-style-type: none;
    margin: 0px;
    padding: 0px;
`

export const ItemsArticles = styled.li`
    align-items: center;
    border-bottom: 1px dashed #ccc;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 5px;
`

export const ButtonDelete = styled.button`
    border: none;
    background-color: #fb0207;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    font-size: 0.6em;
    padding: 2px, 5px;
`