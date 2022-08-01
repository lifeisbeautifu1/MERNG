import {
  Navbar,
  Clients,
  AddClientModal,
  AddProjectModal,
  Projects,
} from '../components';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="d-flex gap-3 mb-4">
          <AddClientModal />
          <AddProjectModal />
        </div>
        <Projects />
        <hr />
        <Clients />
      </div>
    </>
  );
};

export default Home;
