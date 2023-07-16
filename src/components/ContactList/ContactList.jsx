import Contact from "components/Contact/Contact";
import { Component } from "react";
import PropTypes from 'prop-types';

class ContactList extends Component {
    render() {
        const { contacts, deleteContact } = this.props
        return (
            <ul>
              {contacts.map(contact => {
                return (
                  <Contact
                    key={contact.id}
                    contact={contact}
                    onClick={(id) => deleteContact(id)}    
                    />
                );
              })}
            </ul>
    )
    } 
}

export default ContactList

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.any.isRequired),
    deleteContact: PropTypes.func.isRequired,
}