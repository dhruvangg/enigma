import PropTypes from 'prop-types'
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

const RichText = ({ value, onChange }) => {
    return (
        <ReactQuill
            className="h-[200px]"
            theme='snow'
            value={value}
            onChange={(newValue) => onChange(newValue)}
        />
    );
}

export default RichText;

RichText.propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func,
}
