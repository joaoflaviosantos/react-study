import styles from '../../App.module.css'

import BreadcrumbElement from '../elements/BreadcrumbElement'

export default function Home() {
    return (
        <>
            <BreadcrumbElement first="Home" />
            <div className={styles.site_layout_content}>
                <h1>Home</h1>
                <p>Home page content...</p>
            </div>
        </>
    )
}
