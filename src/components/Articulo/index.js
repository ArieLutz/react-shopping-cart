//import styles from './estilos'
import { Button } from '../Button'
import {Container, Image, ProductName, Price} from './styles'

export const Articulo = ({prod, agregarAlCarro}) => {
    return (
        <Container >
            <Image imagen={prod.imagen}/> 

            <ProductName>{prod.nombre}</ProductName>
            <Price>${prod.precio.toLocaleString()}</Price>

            <Button prod={prod} agregarAlCarro={agregarAlCarro}>Add To Cart</Button>
        </Container>
    )
}


/**
 * article (contenedor)         Container
 * div  (imagen)                Image
 * h4 (nombre del producto)     ProductName
 * p (precio del producto)      Price ----se colocan nombres que indiquen que es lo que hay ahi
 */

