import Navbar from "../components/Navbar";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function SinglePage({ deleteJob }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;

    deleteJob(jobId);

    toast.success("Job deleted successfully");

    navigate("/jobs");
  };

  return (
    <>
      <Navbar />

      <section>
        <div className="container my-4 py-3 px-3">
          <Link
            to="/jobs"
            className="text-primary d-flex align-items-center text-decoration-none"
          >
            ← Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-light">
        <div className="container py-5 px-3">
          <div className="row">
            <main className="col-md-8">
              <div className="bg-white p-4 rounded shadow-sm text-center text-md-start">
                <div className="text-muted mb-3">{job.type}</div>
                <h1 className="h2 mb-3">{job.title}</h1>
                <div className="text-white mb-3 d-flex align-items-center justify-content-center justify-content-md-start">
                  <i className="fa-solid fa-location-dot text-warning me-2"></i>
                  <p className="text-warning mb-0">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded shadow-sm mt-4">
                <h3 className="text-primary h5 mb-4">Job Description</h3>

                <p className="mb-3">{job.description}</p>

                <h3 className="text-primary h5 mb-2">Salary</h3>

                <p className="mb-3">{job.salary} / Year</p>
              </div>
            </main>

            <aside className="col-md-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h3 className="h5 mb-4">Company Info</h3>

                <h2 className="h4">{job.company.title}</h2>

                <p className="my-2">{job.company.description}</p>

                <hr className="my-3" />

                <h3 className="h5">Contact Email:</h3>

                <p className="my-2 bg-light p-2 fw-bold">
                  {job.company.contactEmail}
                </p>

                <h3 className="h5">Contact Phone:</h3>

                <p className="my-2 bg-light p-2 fw-bold">
                  {job.company.contactPhone}
                </p>
              </div>

              <div className="bg-white p-4 rounded shadow-sm mt-4">
                <h3 className="h5 mb-4">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="btn btn-primary w-100 mb-2"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="btn btn-danger w-100"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};
export { SinglePage as default, jobLoader };
