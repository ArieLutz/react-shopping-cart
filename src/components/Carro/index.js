import { useState } from 'react'
import { Burbuja } from '../Burbuja'
//import styles from './estilos'
import { ContainerCar, ButtonCar, ContainerListArticles, ListArticles, ItemsArticles, ButtonDelete } from './styles'

export const Carro = ({ cantidad, productos }) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    return (
        <ContainerCar>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <ButtonCar onClick={handleMostrarCarro}>
                Carro
            </ButtonCar>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ContainerListArticles>
                        <ListArticles>
                            {
                                productos.map(x => {
                                    return (
                                        <ItemsArticles >
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><ButtonDelete>X</ButtonDelete> {x.nombre}</span>
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </ItemsArticles>
                                    )
                                })
                            }
                            <ItemsArticles>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </ItemsArticles>
                            <ItemsArticles>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </ItemsArticles>
                            <ItemsArticles >
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </ItemsArticles>
                        </ListArticles>
                    </ContainerListArticles>
            }
        </ContainerCar>

    )
}

/**
 * 
 * div (contenedor)                        ContainerCar
 * button (boton del carro)                ButtonCar
 * div (Contenedor lista de articulos en el carrito)  ContainerListArticles
 * ul  (Lista de articulos)                           ListArticles
 * li (items de articulos)                            ItemsArticles
 * button (boton de eliminar articulo)                ButtonDelete
 */

