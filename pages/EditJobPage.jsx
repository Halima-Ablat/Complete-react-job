import { useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditJobPage({ updateJobSubmit }) {
  const job = useLoaderData();

  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

  const navigate = useNavigate();

  const { id } = useParams();

  function submitForm(e) {
    e.preventDefault();
    const updatedJob = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    updateJobSubmit(updatedJob);

    toast.success("Job updated successfully");

    return navigate(`/jobs/${id}`);
  }

  return (
    <>
      <Navbar />
      <section className="bg-light">
        <div className="container py-5">
          <div className="card shodow p-4 mx-3 mx-md-0">
            <form onSubmit={submitForm}>
              <h2 className="h3 text-center fw-bold mb-4">Edit Job</h2>

              <div className="form-group mb-3">
                <label htmlFor="type" className="fw-bold">
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="form-control"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="title" className="fw-bold">
                  Job Listing Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  placeholder="eg. Beautiful Apartment In Miami"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="description" className="fw-bold">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control"
                  rows="4"
                  placeholder="Add any job duties, expectations, requirements, etc"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="salary" className="fw-bold">
                  Salary
                </label>
                <select
                  id="salary"
                  name="salary"
                  className="form-control"
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                >
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">$50K - $60K</option>
                  <option value="$60K - 70K">$60K - $70K</option>
                  <option value="$70K - 80K">$70K - $80K</option>
                  <option value="$80K - 90K">$80K - $90K</option>
                  <option value="$90K - 100K">$90K - $100K</option>
                  <option value="$100K - 125K">$100K - $125K</option>
                  <option value="$125K - 150K">$125K - $150K</option>
                  <option value="$150K - 175K">$150K - $175K</option>
                  <option value="$175K - 200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              <div className="form-control mb-3">
                <label htmlFor="location" className="fw-bold">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="form-control"
                  placeholder="Company Location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <h3 className="h4 mb-3">Company Info</h3>

              <div className="form-group mb-3">
                <label htmlFor="company" className="fw-bold">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-control"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="company_description" className="fw-bold">
                  Company Description
                </label>
                <textarea
                  id="company_description"
                  name="company_description"
                  className="form-control"
                  rows="4"
                  placeholder="What does your company do?"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="contact_email" className="fw-bold">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="form-control"
                  placeholder="Email address for applicants"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="contact_phone" className="fw-bold">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="form-control"
                  placeholder="Optional phone for applicants"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>

              <div>
                <button className="btn btn-primary" type="submit">
                  Update Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default EditJobPage;
