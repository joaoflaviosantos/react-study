import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li>
                    <Link className={styles.item} to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={styles.item} to="/company">
                        Company
                    </Link>
                </li>
                <li>
                    <Link className={styles.item} to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
