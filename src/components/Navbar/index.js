import { Carro } from '../Carro'
//import styles from './estilos'
import {Nav} from './styles'

export const Navbar = ({ cantidad, productos }) => {
    return (
        <Nav>
            <p>Logo</p>
            <Carro cantidad={cantidad} productos={productos} />
        </Nav>
    )
}

/**
 * nav (Parte superior de la pagina)  Nav
 */