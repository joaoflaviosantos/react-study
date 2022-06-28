import styles from '../App.module.css'

import BreadcrumbElement from '../components/elements/BreadcrumbElement'

import AntDesignFormExemple from '../components/antd-exemples/AntDesignFormExemple'

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
