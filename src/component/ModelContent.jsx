import PropTypes from 'prop-types';

const ModelContent = ({ content, onClose }) => {
    return (
        <div className='fixed w-full h-screen bg-black/20 top-0 left-0 flex justify-center'>
            <button className='absolute top-5 font-bold' onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                </svg>
            </button>
            <div className='max-w-3xl relative my-16 bg-white overflow-y-scroll overflow-x-hidden'>
                <div className="prose lg:prose-xl max-w-3xl mx-auto p-4" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        </div>
    )
}

export default ModelContent;

ModelContent.propTypes = {
    content: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}