import { deleteContact } from '../../redux/contactsSlices.js';
import { useSelector, useDispatch } from "react-redux";
import './Contact.css'

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name.toLowerCase());
    const dispatch = useDispatch();

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );

    return (
        <ul className='contact-item-list'>
            {filteredContacts.map(contact => (
                <li className='contact-item' key={contact.id}>
                    {contact.name}: {contact.number}
                    <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
                </li>
            ))
            }
        </ul>
    );
};

export default ContactList
