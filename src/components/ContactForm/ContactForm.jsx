import { nanoid } from "nanoid"
import { Component } from "react"

class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value,
        }
        )
    }

    handleSubmit = (e) => {
        const { name, number } = this.state
        const {createContact} = this.props
        e.preventDefault()
        
        const contact = {
            name,
            number,
            id: nanoid(),
        }
    createContact(contact)
    }
     
    render() {
        const {name, number} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>{this.props.title}</h2>
                <label htmlFor="#">Name </label>
                <input type="text" name="name"
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={this.handleChange} value={name} required  />
                
                <label htmlFor="#">Number</label>
                <input type="tel" name="number"
                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={this.handleChange} value={number} required />
                
                <button type="submit">Add contact</button>
            </form>
    )}
}

export default ContactForm