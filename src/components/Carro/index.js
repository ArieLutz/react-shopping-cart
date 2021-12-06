import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import styles from './estilos'
import swal from 'sweetalert'
import { ContainerCar, ButtonCar, ContainerListArticles, ListArticles, ItemsArticles, ButtonDelete } from './styles'

export const Carro = ({ cantidad, productos }) => {
    
    const [Productos, setProductos] = useState(productos)
    const [mostrarCarro, setMostrarCarro] = useState(false)

    //Estado para mostrar el carrito de compras
    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

   //Alerta de confirmar
   const ConfirmAlert = (id) =>{
    swal({
        title:"Eliminar articulo",
        text: "¿Está seguro de eliminar el artículo del carrito de compra?",
        buttons: ["No","Si"]
    }).then(respuesta=>{
        if(respuesta){
            eliminarProducto(id)
        }
    })
   }


    //Eliminar productos del carrito
    const eliminarProducto = (id) => {
        // filtramos la data para no agregar el producto que eliminanos
        const exist = Productos.find((x) => x.id === id)
        if (exist) {
            setProductos(Productos.filter((x) => x.id !== id))
        }
    };

    let subTotal = Productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    return (
        <ContainerCar>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <ButtonCar style={styles.carro} onClick={handleMostrarCarro}>
                Carro
            </ButtonCar>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ContainerListArticles>
                        <ListArticles>
                            {
                                Productos.map(x => {
                                    return (
                                        <ItemsArticles >
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><ButtonDelete onClick={() => ConfirmAlert(x.id)} >X</ButtonDelete> {x.nombre}</span>
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

