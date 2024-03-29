import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AiOutlineDollar,
  AiOutlineCalendar,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const handleApplyJob = () => {
    saveJobApplication(id);
    toast("you are applied successfully");
  };
  return (
    <div>
      <h1 className="card-actions justify-center font-semibold text-3xl my-6">
        Job Details
      </h1>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3 my-6">
          <p>
            <span className="font-bold my-2">Job Description: </span>
            {job.job_description}
          </p>
          <p>
            <span className="font-bold my-2">Job Responsibility: </span>
            {job.job_responsibility}
          </p>
          <p>
            <span className="font-bold my-2">Educational Requirements: </span>
            {job.educational_requirements}
          </p>
          <p>
            <span className="font-bold my-2">Experiences: </span>
            {job.experiences}
          </p>
        </div>
        <div className="border p-5">
          <h1 className="font-bold">Job Details</h1>
          <hr className="my-4" />
          <p className="flex">
            <AiOutlineDollar className="text-2xl mr-1" />
            Salary: {job.salary}(Per Month)
          </p>
          <p className="flex">
            <AiOutlineCalendar className="text-2xl mr-1" />
            Job Title: {job.job_title}
          </p>
          <h3 className="my-3">Contact Information</h3>
          <hr />
          <p className="flex mt-3">
            <AiOutlinePhone className="text-2xl mr-1" />
            Phone: {job.contact_information.phone}
          </p>
          <p className="flex">
            <AiOutlineMail className="text-2xl mr-1" />
            Email: {job.contact_information.email}
          </p>
          <p className="flex mb-3">
            <IoLocationOutline className="text-2xl mr-1" />
            Address: {job.contact_information.address}
          </p>
          <button onClick={handleApplyJob} className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
