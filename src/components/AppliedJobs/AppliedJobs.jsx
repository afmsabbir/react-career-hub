import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(()=>{
        const storedJobsId = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => job)
        }
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default AppliedJobs;