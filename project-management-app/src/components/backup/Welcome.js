function Welcome({ name }) {
    function greet(anyName) {
        return `Hello ${anyName}, how are you?!`
    }

    return <>{name && <p>{greet(name)}</p>}</>
}

export default Welcome
