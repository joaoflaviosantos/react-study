import styles from './YourName.module.css'

function YourName({ setName }) {
    return (
        <div>
            <label htmlFor="yorName">Name: </label>
            <input
                className={styles.yourNameInput}
                type="text"
                name="yorName"
                id="yorName"
                placeholder="Enter your full name"
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}

export default YourName
