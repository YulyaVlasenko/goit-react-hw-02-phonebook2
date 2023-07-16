import { Component } from "react"
import ContactForm from "./ContactForm/ContactForm"
import { Section } from "./Section/Section"
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"



class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  createContact = (contact) => {
    this.setState (prevState => ({
      contacts: [...prevState.contacts, contact]
    }));
  }

   getListOfContacts = () => {
     const { contacts, filter } = this.state;
     const filterValue = filter.toLowerCase()
     return contacts.filter((contact) => 
        contact.name.toLowerCase().includes(filterValue)
      )
  }

  handleChangeFilter = ({target:{value}}) => {
    this.setState({
      filter: value,
    })
  }


  deleteContact = (contactForDelete) => {
    this.setState(prevState => 
      ({contacts: prevState.contacts.filter(contact => contact.id !== contactForDelete)})
    ) 
  }

  render() {
    const {filter, contacts} = this.state
   
    return (
      <>
      <Section title='Phonebook'>
          <ContactForm createContact={this.createContact} contacts={contacts} />
      </Section>
        
        <Section title='Contacts'>
          <Filter title='Find contacts by name' handleChangeFilter={this.handleChangeFilter} value={filter} />
          <ContactList contacts={this.getListOfContacts()} deleteContact={this.deleteContact}/>
      </Section>
      </>
  )
    
  } 
};

export default App
