function SayMyName(props) {
    return (
        <div>
            <p>
                This component is receiving a props with the attribute{' '}
                <strong>name</strong> '{props.name}', ok?
            </p>
        </div>
    )
}

export default SayMyName
