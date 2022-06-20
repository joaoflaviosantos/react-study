import styles from './Home.module.css'

import LinkButton from '../elements/LinkButton'
import AntDesignTableExemple from '../antd-exemples/AntDesignTableExemple'

import savings from '../../img/savings.svg'

export default function Home() {
    return (
        <>
            <section className={styles.home_container}>
                <h1>
                    Welcome to <span>Costs!</span>
                </h1>
                <p>Start managing your projects right now!</p>
                <LinkButton text="Create a project" to="/newproject" />
                <img src={savings} alt="Costs" />
            </section>

            <section className={styles.home_container}>
                <AntDesignTableExemple style={{ width: '100%' }} />
            </section>
        </>
    )
}
