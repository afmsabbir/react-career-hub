import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="company log" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p className="font-bold">{company_name}</p>
        <div>
          <button className="btn btn-outline btn-info">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline btn-info mx-4">{job_type}</button>
        </div>
        <div className="flex mt-4">
          <p className="flex">
            <IoLocationOutline className="text-2xl mr-2" /> {location}
          </p>
          <p className="flex">
            <AiOutlineDollar className="text-2xl mr-2" />
            Salary: {salary}
          </p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
