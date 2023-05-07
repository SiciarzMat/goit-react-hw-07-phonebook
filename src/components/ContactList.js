import { Contact } from './Contact';
import { selectContacts, selectFilters } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
    const contacts = useSelector(selectContacts);

    const filterValue = (useSelector(selectFilters)).value;

    return (
        <ul>
            {contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase())).map(contact => (
                <li key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    )
}