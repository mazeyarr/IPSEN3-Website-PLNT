export interface IProject {
  title: string;
}

export interface ICreatedBy {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  jwt?: any;
  roles?: any;
}

export interface IInstitute {
  id: number;
  name: string;
  location: string;
}

export interface IEducation {
  id: number;
  title: string;
  institute: IInstitute;
}

export interface IResource {
  id: number;
  filename: string;
  path: string;
  mime?: any;
  extension: string;
  projectId: number;
  fullPath: string;
}

export interface IProject {
  id: number;
  title: string;
  language: string;
  tags: string;
  catagory: string;
  createdBy: ICreatedBy;
  education: IEducation;
  fieldOfStudy: string;
  study: string;
  resource: IResource;
  likes: any[];
  totalLikes: number;
  category: string;
}

export class Project {
  id: number;
  title: string;
  language: string;
  tags: string;
  catagory: string;
  createdBy: ICreatedBy;
  education: IEducation;
  fieldOfStudy: string;
  study: string;
  resource: IResource;
  likes: any[];
  totalLikes: number;
  category: string;

  constructor(project: IProject) {
    this.id = project.id;
    this.title = project.title;
    this.language = project.language;
    this.tags = project.tags;
    this.catagory = project.catagory;
    this.createdBy = project.createdBy;
    this.education = project.education;
    this.fieldOfStudy = project.fieldOfStudy;
    this.study = project.study;
    this.resource = project.resource;
    this.likes = project.likes;
    this.totalLikes = project.totalLikes;
    this.category = project.category;
  }

}
