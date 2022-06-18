import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/company">Company</Link>
            </li>
            <li className={styles.item}>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default Footer
