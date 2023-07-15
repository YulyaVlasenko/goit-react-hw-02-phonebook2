import { Component } from "react"
import ContactForm from "./ContactForm/ContactForm"
import { Section } from "./Section/Section"
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"



class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  }

  createContact = (contact) => {
    this.setState (prevState => ({
      contacts: [...prevState.contacts, contact]
    }));
  }

   getListOfContacts = () => {
      const { contacts } = this.state
      return contacts
  }

  render() {
    // const {contacts} = this.state
   
    return (
      <>
      <Section title='Phonebook'>
          <ContactForm createContact={this.createContact} />
      </Section>
        
        <Section title='Contacts'>
          <Filter title='Find contacts by name'/>
          <ContactList contacts={this.getListOfContacts()} />
      </Section>
      </>
  )
    
  } 
};

export default App
