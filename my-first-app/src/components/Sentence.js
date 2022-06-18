import styles from './Sentence.module.css'

function Sentence () {
    
    return (
        <div className={ styles.sentenceContainer }>
            <p className={ styles.sentenceContent }>This is a React Component with one sentence.</p>
        </div>
    );
}

export default Sentence;