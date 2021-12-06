import styles from './estilos'
import { BubbleNumber } from './styles'

export const Burbuja = ({ cantidad }) => {
    // let { numero } = props
    // let numero = props.numero
    return (
        <BubbleNumber style={styles.burbujaNumero}>
            {cantidad > 9 ? '9+' : cantidad}
        </BubbleNumber>
    )   
}


/**
 * span (burbuja) BubbleNumber
 * se colocan nombres que indiquen que es lo que hay ahi
 */

