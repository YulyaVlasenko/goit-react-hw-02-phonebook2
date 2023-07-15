const Contact = ({ contact: {name, number} }) => {
    return (
        <li>{name}: {number}</li>
    )
}

export default Contact 