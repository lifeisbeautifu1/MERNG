import { IProject, IProjectData, IUpdateProjectVars } from '../interfaces';
import React, { useState } from 'react';
import { UPDATE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECT } from '../queries/projectQueries';
import { useMutation } from '@apollo/client';

interface EditProjectFormProps {
  project: IProject;
}

const EditProjectForm: React.FC<EditProjectFormProps> = ({ project }) => {
  const [projectData, setProjectData] = useState({
    name: project.name,
    status: project.status,
    description: project.description,
  });

  const [updateProject] = useMutation<IProjectData, IUpdateProjectVars>(
    UPDATE_PROJECT,
    {
      variables: {
        input: projectData,
        id: project.id,
      },
      refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description, status } = projectData;
    if (!name || !description || !status) return;
    updateProject();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mt-5">
      <h1>Edit Project</h1>
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
        <button className="btn btn-secondary">Submit</button>
      </form>
    </div>
  );
};

export default EditProjectForm;
