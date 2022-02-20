import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';

export default function ContactList({ contacts, contactsAmount }) {
    return (
        {contactsAmount}
        ? <>
            <ul>
                {contacts.map(({ id, name, number }) =>
                    <li key={id}>
                        <ContactItem id={id} name={name} number={number} />
                    </li>)}
            </ul>
            <p>Total contacts amount: <span>{contactsAmount}</span></p>
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
};