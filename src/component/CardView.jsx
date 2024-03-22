import PropTypes from 'prop-types';

const CardView = ({ interviews }) => {
    let options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    return <div className='grid grid-cols-3'>
        {interviews.map((interview, i) => {
            const { company, status, position, date, jobDescription, summary } = interview;
            return <div key={i} className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200">
                <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white blur-2xl opacity-25"></div>
                <div className="relative">
                    <div className='flex'>
                        <div className='text-2xl mb-2'>{company}</div>
                        <div className='text-sm font-semibold'>{position}</div>
                    </div>
                    <div className='flex justify-between my-3'>
                        <div className="font-semibold text-sm">Job Description</div>
                        <div className="font-semibold text-sm">Summary</div>
                    </div>
                    <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 justify-between">
                        <a href="#" download="/" className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                            <span>{status}</span>
                        </a>
                        <a href="#" className="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative text-gray-950 justify-center">
                            {new Intl.DateTimeFormat("en-IN", options).format(new Date(date))}
                        </a>
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default CardView;

CardView.propTypes = {
    interviews: PropTypes.array.isRequired
}