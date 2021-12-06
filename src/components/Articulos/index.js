import { Articulo } from "../Articulo";
//import styles from './estilos'
import { Articles } from "./styles";

export const Articulos = (props) => {
    const productos = props.data.articulos
    const agregarAlCarro = props.agregarAlCarro

    return (
        <Articles>
            {
                productos.map(prod => 
                    // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                    <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                )
            }
        </Articles>
    )
}

/**
 * div  (articulos)              Articles
----se colocan nombres que indiquen que es lo que hay ahi
 */