function ListArray({ items }) {
    return (
        <>
            <h3>My Array List</h3>
            {items.length > 0 ? (
                items.map((item, index) => <p key={index}>{item}</p>)
            ) : (
                <p>No data.</p>
            )}
        </>
    )
}

export default ListArray
