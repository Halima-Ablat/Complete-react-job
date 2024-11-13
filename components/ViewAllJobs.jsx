import { Link } from "react-router-dom";

function ViewAllJobs() {
  return (
    <>
      <section
        className="mx-auto my-5"
        style={{ maxWidth: "800px", padding: "0 1.5rem" }}
      >
        <Link
          to="/jobs"
          className="btn btn-dark text-white text-center py-2 px-4"
          style={{ borderRadius: "0.25rem", display: "block" }}
        >
          View All Jobs
        </Link>
      </section>
    </>
  );
}
export default ViewAllJobs;
