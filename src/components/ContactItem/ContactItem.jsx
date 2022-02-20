import PropTypes from 'prop-types';

export default function ContactItem({ id, name, number }) {
    return (
        <div>
            <p>{name}</p>
            <a href={`tel:${number}`}>{number}</a>
            <button type='button' onClick={() => {}}></button>
        </div>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};