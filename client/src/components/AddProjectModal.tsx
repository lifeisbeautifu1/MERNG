import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PROJECT } from '../mutations/projectMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';
import {
  IProjectData,
  IAddProjectVars,
  IClientsData,
  IClientsVars,
} from '../interfaces';
import { FaList } from 'react-icons/fa';

const initialState = {
  name: '',
  status: 'Not Started',
  clientId: '',
  description: '',
};

const AddProjectModal = () => {
  const [projectData, setProjectData] = useState(initialState);
  const { data: clientsData } = useQuery<IClientsData, IClientsVars>(
    GET_CLIENTS
  );

  const [addProject] = useMutation<IProjectData, IAddProjectVars>(ADD_PROJECT, {
    variables: { input: projectData },
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, status, clientId, description } = projectData;

    if (!name || !status || !clientId || !description) {
      alert('Please provide all fields');
      return;
    }
    addProject();
    setProjectData(initialState);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addProjectModal"
      >
        <div className="d-flex align-items-center">
          <FaList className="icon" />
          <div>New Project</div>
        </div>
      </button>
      <div className="modal fade" id="addProjectModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">New Project</h5>
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
                    value={projectData.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    value={projectData.description}
                    name="description"
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    name="status"
                    value={projectData.status}
                    className="form-select"
                    onChange={handleChange}
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Client Id</label>
                  <select
                    name="clientId"
                    className="form-select"
                    onChange={handleChange}
                  >
                    <option value="">Select Client</option>
                    {clientsData &&
                      clientsData.clients.map((client) => (
                        <option key={client.id} value={client.id}>
                          {client.name}
                        </option>
                      ))}
                  </select>
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

export default AddProjectModal;
