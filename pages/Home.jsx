import Navbar from "../components/Navbar";
import Option from "../components/Option";
import JobListing from "../components/JobListing";
import Hero from "../components/Hero";
import ViewAllJobs from "../components/ViewAllJobs";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Option />
      <JobListing isHome={true} />
      <ViewAllJobs />
    </>
  );
}
export default Home;
