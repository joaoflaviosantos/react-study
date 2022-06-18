import ListItem from "./ListItem";

function List() {
    
    return (
        <>
            <h1>My List</h1>
            <ul>
                <ListItem item="Item 1"/>
                <ListItem item="Item 2"/>
                <ListItem item="Item 3"/>
            </ul>
        </>
    );
}

export default List;