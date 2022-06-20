import styles from '../../App.module.css'

import BreadcrumbElement from '../elements/BreadcrumbElement'

export default function Company() {
    return (
        <>
            <BreadcrumbElement first="Company" />
            <div className={styles.site_layout_content}>
                <h1>Company</h1>
                <p>Company page content...</p>
            </div>
        </>
    )
}
