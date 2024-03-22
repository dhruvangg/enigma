import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeInterview } from '../redux/feature/interviewSlice';
import ModelContent from './ModelContent';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const TableView = ({ interviews }) => {
    const dispatch = useDispatch();
    const [showModel, setShowModel] = useState(false)
    const [modelContent, setModelContent] = useState()

    return <>
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="py-3 px-6"><div>Company</div></th>
                    <th scope="col" className="py-3 px-6">Stage</th>
                    <th scope="col" className="py-3 px-6">Position</th>
                    <th scope="col" className="py-3 px-6">Date</th>
                    <th scope="col" className="py-3 px-6">Job Description</th>
                    <th scope="col" className="py-3 px-6">Summary</th>
                    <th scope="col" className="py-3 px-6">Action</th>
                </tr>
            </thead>
            <tbody>
                {interviews.length > 0 && interviews.map((interview, i) => {
                    const { company, status, position, date, jobDescription, summary } = interview;
                    return <tr key={i} className="bg-white border-b">
                        <td className="py-4 px-6 align-top">{company}</td>
                        <td className="py-4 px-6 align-top">{status}</td>
                        <td className="py-4 px-6 align-top">{position}</td>
                        <td className="py-4 px-6 align-top">{date}</td>
                        <td className="py-4 px-6 align-top">
                            <button className='font-medium text-sm text-blue-700' onClick={() => { setShowModel(true); setModelContent(jobDescription); }}>View</button>
                        </td>
                        <td className="py-4 px-6 align-top">
                            <button className='font-medium text-sm text-blue-700' onClick={() => { setShowModel(true); setModelContent(summary); }}>View</button>
                        </td>
                        <td className="py-4 px-6 align-top">
                            <button onClick={() => dispatch(removeInterview(i))}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table >
        {showModel && createPortal(
            <ModelContent content={modelContent} onClose={() => setShowModel(false)} />,
            document.body
        )
        }
    </>
}

export default TableView;

TableView.propTypes = {
    interviews: PropTypes.array.isRequired
}