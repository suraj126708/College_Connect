import Layout from "../../Components/Layouts/Layout";
import MentorForm from "../../Components/Mentors/MentorForm";

const MentorRegistration = () => {
  return (
    <>
      <Layout> </Layout>
      <div className="text-center mt-0 ml-72">
        <h1 className="text-2xl font-bold text-gray-800">
          Mentor Registration
        </h1>
        <p className="text-gray-600">Register new mentors in the system</p>
      </div>
      <MentorForm />
    </>
  );
};

export default MentorRegistration;
