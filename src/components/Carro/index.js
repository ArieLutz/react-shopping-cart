import { useState, useRef } from 'react'
import { Burbuja } from '../Burbuja'
import styles from './estilos'
import swal from 'sweetalert'
import { ContainerCar, ButtonCar, ContainerListArticles, ListArticles, ItemsArticles, ButtonDelete } from './styles'
import useCompany from '../../hooks/useCompany'


export const Carro = ({ cantidad, productos }) => {
    //Extraigo las variables del hook 
    const {name, days} = useCompany()

    //Variables de estado
    const [Productos, setProductos] = useState(productos)
    const [mostrarCarro, setMostrarCarro] = useState(false)

    //Estado para mostrar el carrito de compras
    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

   //Alerta de confirmar
   const ConfirmAlert = (id) =>{
    swal({
        title:"Carrito de compras",
        text: "¿Esta seguro de eliminar el producto?",
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

    //APlicacion de UseRef para el envio de nombre y direccion a una alerta
    const inputName = useRef(null)

    const inputDirection = useRef(null)
  

    //Funcion que mostrara la informacion traida mediante use ref
    const detailsSale = () => {
        alert(inputName.current.value,
              inputDirection.current.value);

    }

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
                            <ItemsArticles>
                                <strong>Envio por:</strong>
                                <strong>{name}</strong>
                            </ItemsArticles>
                            <ItemsArticles>
                                <strong>Tiempo de envio</strong>
                                <strong>{days} dias</strong>
                            </ItemsArticles>
                            <ItemsArticles>
                                <strong>Datos del envio</strong>
                            </ItemsArticles>
                            <ItemsArticles>
                                <strong>Nombre:</strong>
                                <input type="text" ref={inputName}></input>
                            </ItemsArticles>
                            <ItemsArticles>
                                <strong>Direccion:</strong>
                                <input type="text" ref={inputDirection}></input>
                            </ItemsArticles>
                            <ButtonCar onClick={detailsSale}>Procesar Factura</ButtonCar>
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

