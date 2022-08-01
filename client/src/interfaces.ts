export interface IClient {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface IClientsData {
  clients: IClient[];
}

export interface IClientData {
  client: IClient;
}

export interface IClientsVars {}

export interface INewClientDetails {
  name: string;
  email: string;
  phone: string;
}

export interface IDeleteClientVars {
  id: string;
}

export interface IProject {
  id: string;
  name?: string;
  status?: string;
  description?: string;
  client?: IClient;
}

export interface IProjectsData {
  projects: IProject[];
}

export interface IProjectsVars {}

export interface IProjectData {
  project: IProject;
}

export interface IProjectVars {
  id: string;
}

export interface IAddProjectVars {
  input: {
    name?: string;
    status?: string;
    description?: string;
    clientId?: string;
  };
}

export interface IUpdateProjectVars {
  input: {
    name?: string;
    status?: string;
    description?: string;
  };
  id: string;
}
