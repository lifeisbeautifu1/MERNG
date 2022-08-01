import { useQuery } from '@apollo/client';
import { IClientsData, IClientsVars } from '../interfaces';
import { Spinner, ClientRow } from './';
import { GET_CLIENTS } from '../queries/clientQueries';

const Clients = () => {
  const { error, loading, data } = useQuery<IClientsData, IClientsVars>(
    GET_CLIENTS
  );
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <table className="table table-hover my-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data?.clients.map((client) => (
          <ClientRow key={client.id} client={client} />
        ))}
      </tbody>
    </table>
  );
};

export default Clients;
