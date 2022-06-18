function People({ name, age, occupation, picture }) {
    return (
        <div>
            <img src={ picture } alt={ name } />
            <h2>Name: { name }</h2>
            <p>Age: { age }</p>
            <p>Occupation: { occupation }</p>
        </div>
    );
}

export default People;