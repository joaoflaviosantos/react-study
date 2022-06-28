import styles from './Home.module.css'

import LinkButton from '../components/elements/LinkButton'

import AntDesignSteps from '../components/antd-exemples/AntDesignSteps'

import savings from '../img/savings.svg'

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
                <AntDesignSteps />
            </section>
        </>
    )
}
