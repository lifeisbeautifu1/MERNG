import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';
import { Spinner, ProjectCard } from './';
import { IProjectsData, IProjectsVars } from '../interfaces';

const Projects = () => {
  const { data, error, loading } = useQuery<IProjectsData, IProjectsVars>(
    GET_PROJECTS
  );

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="row mt-4">
      {data?.projects?.length! > 0 ? (
        data?.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <p>No projects</p>
      )}
    </div>
  );
};

export default Projects;
