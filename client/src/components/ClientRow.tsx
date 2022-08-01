import { IClient, IClientData, IDeleteClientVars } from '../interfaces';
import { FaTrash } from 'react-icons/fa';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { useMutation } from '@apollo/client';
import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';

interface ClientRowProps {
  client: IClient;
}

const ClientRow: React.FC<ClientRowProps> = ({ client }) => {
  const [deleteClient] = useMutation<IClientData, IDeleteClientVars>(
    DELETE_CLIENT,
    {
      variables: {
        id: client.id,
      },
      refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    }
  );
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteClient()}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
