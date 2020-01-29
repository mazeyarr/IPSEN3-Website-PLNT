import {IProjectSimple} from '../Project/project.simple';
import {IProject} from '../Project/project';

export interface IResource {
  id: number;
  filename: string;
  path: string;
  mime?: string;
  extension: string;
  project: IProject;
  valid: boolean;
}

export class Resource {
  id: number;
  filename: string;
  path: string;
  mime?: string;
  extension: string;
  project: IProject;
  valid: boolean;

  constructor(resource: IResource) {
    this.id = resource.id;
    this.filename = resource.filename;
    this.path = resource.path;
    this.mime = resource.mime;
    this.extension = resource.extension;
    this.project = resource.project;
    this.valid = resource.valid;
  }
}
