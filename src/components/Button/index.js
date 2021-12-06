//import styles from './estilos'
import { ButtonAddToCar } from './styles'

export const Button = ({children, agregarAlCarro, prod}) => {
    return (
        <ButtonAddToCar onClick={() => agregarAlCarro(prod)}>{children}</ButtonAddToCar>
    )
}

/**
 * button (Botn agregar al carro)    ButtonAddToCar
 */