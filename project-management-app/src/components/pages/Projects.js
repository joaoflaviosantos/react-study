import styles from '../../App.module.css'

import BreadcrumbElement from '../elements/BreadcrumbElement'

export default function Projects() {
    return (
        <>
            <BreadcrumbElement first="Projects" />
            <div className={styles.site_layout_content}>
                <h1>Projects</h1>
                <p>Created projects...</p>
            </div>
        </>
    )
}
