import PropTypes from 'prop-types'

function ListItem({brand, year_launch}) {

    return (
        <>
            <li>{ brand } - { year_launch }</li>
        </>
    );
}

ListItem.propTypes = {
    brand: PropTypes.string.isRequired,
    year_launch: PropTypes.number.isRequired,  
}

ListItem.defaultProps = {
    brand: 'Brand is needed',
    year_launch: Number(0),
}

export default ListItem;