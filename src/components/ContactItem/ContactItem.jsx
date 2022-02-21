import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { DeleteBtn } from './ContactItem.styled';

export default function ContactItem({ id, name, number, onDeleteContact }) {
    return (
        <div>
            <p>{name}</p>
            <a href={`tel:${number}`}>{number}</a>
            <DeleteBtn type='button' onClick={() => onDeleteContact(id)}>
                <IconContext.Provider value={{ size: "2em" }}>
                    <FaTrashAlt />
                </IconContext.Provider>
            </DeleteBtn>
        </div>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}; 