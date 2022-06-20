import styles from '../../App.module.css'

import BreadcrumbElement from '../elements/BreadcrumbElement'

import AntDesignFormExemple from '../antd-exemples/AntDesignFormExemple'

export default function Contact() {
    return (
        <>
            <BreadcrumbElement first="Contact" />
            <div className={styles.site_layout_content}>
                <h1>Contact</h1>
                <AntDesignFormExemple />
            </div>
        </>
    )
}
