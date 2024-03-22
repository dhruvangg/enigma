import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addInterview } from "../redux/feature/interviewSlice";
import RichText from "../component/TextEditor";

const NewInteriew = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data) => dispatch(addInterview(data))

    return <div className="max-w-screen-xl mx-auto my-4">
        <Link to={'/'}>back</Link>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="grid grid-cols-8 gap-8">
                <div className="col-span-2">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="company" className="font-medium text-sm mb-1">Company</label>
                        <input {...register("company")} id="company" className="border py-1 px-3" placeholder="Company" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="status" className="font-medium text-sm mb-1">Status</label>
                        <select {...register("status")} id="status" className="border py-1 px-3">
                            <option value="Ready to apply">Ready to apply</option>
                            <option value="Applied">Applied</option>
                            <option value="Followed up">Followed up</option>
                            <option value="1st Round">1st Round</option>
                            <option value="2nd Round">2nd Round</option>
                            <option value="Final Round">Final Round</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="position" className="font-medium text-sm mb-1">Position</label>
                        <input {...register("position")} id="position" className="border py-1 px-3"/>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="date" className="font-medium text-sm mb-1">Date</label>
                        <input {...register("date")} type="date" id="date" className="border py-1 px-3"/>
                    </div>
                </div>
                <div className="col-span-3">
                    <label htmlFor="jobDescription" className="font-medium text-sm mb-1">Job Description</label>
                    <Controller
                        render={({ field: { value, onChange } }) => <RichText value={value} onChange={onChange} />}
                        name="jobDescription"
                        control={control}
                    />
                </div>
                <div className="col-span-3">
                    <label htmlFor="summary" className="font-medium text-sm mb-1">Summary</label>
                    <Controller
                        render={({ field: { value, onChange } }) => <RichText value={value} onChange={onChange} />}
                        name="summary"
                        control={control}
                    />
                </div>
            </div>
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    </div>
}

export default NewInteriew;