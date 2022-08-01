import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { IClientData, INewClientDetails } from '../interfaces';
import { FaUser } from 'react-icons/fa';

const initialState = {
  name: '',
  email: '',
  phone: '',
};

const AddClientModal = () => {
  const [clientData, setClientData] = useState(initialState);

  const [addClient] = useMutation<
    IClientData,
    {
      input: INewClientDetails;
    }
  >(ADD_CLIENT, {
    variables: { input: clientData },
    refetchQueries: [{ query: GET_CLIENTS }],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientData({
      ...clientData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phone } = clientData;
    if (!name || !email || !phone) {
      return alert('Please provide all fields');
    }
    addClient();
    setClientData(initialState);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addClientModal"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Add Client</div>
        </div>
      </button>
      <div className="modal fade" id="addClientModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Client</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={clientData.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={clientData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={clientData.phone}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <button className="btn btn-secondary" data-bs-dismiss="modal">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClientModal;
