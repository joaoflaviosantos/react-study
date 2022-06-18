import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import { AiFillHome } from 'react-icons/ai'
import { MdContactPhone } from 'react-icons/md'
import { SiWebmoney } from 'react-icons/si'

function Footer() {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">
                        <AiFillHome className={styles.item_svg} />
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to="/company">
                        <SiWebmoney className={styles.item_svg} />
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to="/contact">
                        <MdContactPhone className={styles.item_svg} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Footer
