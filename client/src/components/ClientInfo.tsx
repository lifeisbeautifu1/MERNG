import { IClient } from '../interfaces';
import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';

interface ClientInfoProps {
  client: IClient;
}

const ClientInfo: React.FC<ClientInfoProps> = ({ client }) => {
  return (
    <>
      <h5 className="mt-5">Client information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" /> {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" /> {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" /> {client.phone}
        </li>
      </ul>
    </>
  );
};

export default ClientInfo;
