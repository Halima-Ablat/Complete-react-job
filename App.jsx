import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";
import SinglePage, { jobLoader } from "./pages/SinglePage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

function App() {
  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch(`/api/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // Update Job

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/jobs", element: <Jobs /> },
    { path: "/add-job", element: <AddJobPage addJobSubmit={addJob} /> },
    {
      path: "/edit-job/:id",
      element: <EditJobPage updateJobSubmit={updateJob} />,
      loader: jobLoader,
    },
    {
      path: "/jobs/:id",
      element: <SinglePage deleteJob={deleteJob} />,
      loader: jobLoader,
    },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <>
      {" "}
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
