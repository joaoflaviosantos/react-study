import styles from './Conditional.module.css'
import { useState } from 'react'

function Conditional() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    function registerEmail(e) {
        e.preventDefault()
        setUserName(name)
        setUserEmail(email)
        console.log(
            `{ operation: 'registerEmail', name: '${name}', email: '${email}' }`
        )
    }

    function unregisterEmail(e) {
        e.preventDefault()
        setUserName('')
        setUserEmail('')
        setName('')
        setEmail('')
        console.log(`{ operation: 'unregisterEmail', name: '', email: '' }`)
    }

    return (
        <div>
            <form className={styles.conditionalContainer}>
                <h2>Register your email</h2>
                <div>
                    <label htmlFor="custumerName">Name: </label>
                    <input
                        className={styles.conditionalInput}
                        type="text"
                        name="custumerName"
                        id="custumerName"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="custumerEmail">Email: </label>
                    <input
                        className={styles.conditionalInput}
                        type="email"
                        name="custumerEmail"
                        id="custumerEmail"
                        placeholder="Your best email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className={styles.conditionalButton}
                    onClick={registerEmail}
                >
                    Register-me
                </button>
            </form>
            {userEmail && (
                <div className={styles.conditionalContainerResult}>
                    <h2>Verify your data</h2>
                    <h3>Name: {userName}</h3>
                    <h3>Email: {userEmail}</h3>
                    <button
                        className={styles.conditionalButton}
                        onClick={unregisterEmail}
                    >
                        Clean Data
                    </button>
                </div>
            )}
        </div>
    )
}

export default Conditional
