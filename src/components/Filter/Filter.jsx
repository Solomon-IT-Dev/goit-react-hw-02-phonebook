import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function Filter({ label, value, onChange }) {
    const filterInputId = nanoid();

    return (
        <div>
            <label htmlFor={filterInputId}>{label}
                <input type="text" id={filterInputId} value={value} onChange={onChange} />
           </label>
        </div>
    );
};

Filter.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};