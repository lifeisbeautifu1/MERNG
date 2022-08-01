import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../queries/projectQueries';
import { Link, useParams } from 'react-router-dom';
import { IProjectData, IProjectVars } from '../interfaces';
import {
  Spinner,
  ClientInfo,
  DeleteProjectButton,
  EditProjectForm,
} from '../components';

const Project = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery<IProjectData, IProjectVars>(
    GET_PROJECT,
    {
      variables: {
        id: id!,
      },
    }
  );

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="mx-auto w-75 card p-5">
      <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
        Go Back
      </Link>
      <h1>{data?.project.name}</h1>
      <p>{data?.project.description}</p>
      <h5 className="mt-3">Project Status</h5>
      <p className="lead">{data?.project.status}</p>
      <ClientInfo client={data?.project.client!} />
      <EditProjectForm project={data?.project!} />
      <DeleteProjectButton projectId={data?.project.id!} />
    </div>
  );
};

export default Project;
