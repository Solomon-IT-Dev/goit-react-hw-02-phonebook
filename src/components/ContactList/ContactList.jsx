import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';

export default function ContactList({ contacts, contactsAmount, onDeleteContact }) {
    return (
        contactsAmount > 0
        ? <>
            <p>Total contacts amount: <span>{contactsAmount}</span></p>
            <ul>
                {contacts.map(({ id, name, number }) =>
                    <li key={id}>
                        <ContactItem id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
                    </li>)}
            </ul>
          </>
        : <p>There are no contacts in your phonebook</p>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ),
    contactsAmount: PropTypes.number.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};