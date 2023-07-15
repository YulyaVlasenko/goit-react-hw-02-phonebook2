import Contact from "components/Contact/Contact";
import { Component } from "react";

class ContactList extends Component {
    render() {
        const { contacts } = this.props
        return (
            <ul>
              {contacts.map(contact => {
                return (
                  <Contact
                    key={contact.id}
                    contact={contact}
                  />
                );
              })}
            </ul>
    )
    } 
}

export default ContactList