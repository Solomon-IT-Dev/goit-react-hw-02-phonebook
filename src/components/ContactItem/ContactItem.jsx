import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

export default function ContactItem({ id, name, number, onDeleteContact }) {
    return (
        <div>
            <p>{name}</p>
            <a href={`tel:${number}`}>{number}</a>
            <button type='button' onClick={() => onDeleteContact(id)}><FaTrashAlt /></button>
        </div>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}; 