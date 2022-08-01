import { useNavigate } from 'react-router-dom';
import { DELETE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../queries/projectQueries';
import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';
import { IProjectData, IProjectVars } from '../interfaces';

interface DeleteProjectButtonProps {
  projectId: string;
}

const DeleteProjectButton: React.FC<DeleteProjectButtonProps> = ({
  projectId,
}) => {
  const navigate = useNavigate();
  const [deleteProject] = useMutation<IProjectData, IProjectVars>(
    DELETE_PROJECT,
    {
      variables: {
        id: projectId,
      },
      refetchQueries: [{ query: GET_PROJECTS }],
      onCompleted: () => navigate('/'),
    }
  );
  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={() => deleteProject()}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
