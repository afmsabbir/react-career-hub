import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import Job from "../Job/Job";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      //   const jobsApplied = jobs.filter((job) => storedJobsId.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
    }
  }, []);
  return (
    <div>
      <details className="dropdown ">
        <summary className="m-1 btn">Filter By</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Remote</a>
          </li>
          <li>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      {appliedJobs.map((job) => (
        <Job key={job.id} job={job}></Job>
      ))}
    </div>
  );
};

export default AppliedJobs;
