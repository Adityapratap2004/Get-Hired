import { getMyJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import JobCards from "./JobCards";
import { BarLoader } from "react-spinners";

const CreatedJobs = () => {
    const { user } = useUser();
  
    const {
      loading: loadingCreatedJobs,
      data: createdJobs,
      fn: fnCreatedJobs,
    } = useFetch(getMyJobs, {
      recruiter_id: user.id,
    });
  
    useEffect(() => {
      fnCreatedJobs();
    }, []);
  
    return (
      <div>
        {loadingCreatedJobs ? (
          <BarLoader className="mb-4" width={"100%"} color="#063970" />
        ) : (
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {createdJobs?.length ? (
              createdJobs.map((job) => {
                return (
                  <JobCards
                    key={job.id}
                    job={job}
                    onJobAction={fnCreatedJobs}
                    isMyJob
                  />
                );
              })
            ) : (
              <div>No Jobs Found 😢</div>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default CreatedJobs;