import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function JobListing({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [showFullDescriptions, setShowFullDescriptions] = useState(
    new Array(jobs.length).fill(false)
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  console.log(jobs);

  const handleToggle = (index) => {
    const updatedShowFullDescriptions = [...showFullDescriptions];
    updatedShowFullDescriptions[index] = !updatedShowFullDescriptions[index];
    setShowFullDescriptions(updatedShowFullDescriptions);
  };

  return (
    <>
      <section className="bg-light px-4 py-10 mt-3">
        <div className="container">
          <h2 className="display-5 text-primary mb-6 text-center fw-bold py-3">
            {isHome ? "Recent jobs" : "Browse jobs"}
          </h2>
          <div className="row">
            {loading ? (
              <h2>Loading...</h2>
            ) : (
              <>
                {jobs.map((job, index) => {
                  let description = job.description;
                  if (!showFullDescriptions[index]) {
                    description = description.substring(0, 90) + "...";
                  }
                  return (
                    <div className="col-12 col-md-4 mb-4" key={job.id}>
                      <div className="card h-100 p-3 shadow-sm">
                        <div className="card-body">
                          <div className="card-subtitle mb-2 text-muted">
                            {job.type}
                          </div>
                          <h3 className="card-title fw-bold">{job.title}</h3>
                        </div>

                        <div className="card-text">{description}</div>

                        <button
                          onClick={() => handleToggle(index)}
                          className="text-start text-decoration-none border-0 text-primary mb-3"
                          style={{ backgroundColor: "white" }}
                        >
                          {showFullDescriptions[index] ? "Less" : "More"}
                        </button>

                        <h3 className="text-info fs-5 mt-3">
                          {job.salary} / Year
                        </h3>

                        <div className="border-bottom mb-3"></div>

                        <div className="d-flex justify-content-between">
                          <div className="text-warning">📌 {job.location}</div>
                          <Link
                            to={`/jobs/${job.id}`}
                            className="btn btn-primary fw-bold"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default JobListing;
