import ListItem from './ListItem'

function List() {
    return (
        <>
            <h1>My List</h1>
            <ul>
                <ListItem brand="Chevrolet" year_launch={2009} />
                <ListItem brand="Volkswagen" year_launch={2005} />
                <ListItem brand="Renault" year_launch={2020} />
                <ListItem />
            </ul>
        </>
    )
}

export default List
