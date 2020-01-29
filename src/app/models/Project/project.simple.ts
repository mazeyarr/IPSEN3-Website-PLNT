import { IProject } from './project';

export interface Role {
  id: number;
  userId: number;
  role: string;
}

export interface CreatedBy {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  roles: Role[];
}

export interface Institute {
  id: number;
  name: string;
  location: string;
}

export interface Education {
  id: number;
  title: string;
  institute: Institute;
}

export interface HasLikes {
  DISLIKE: number;
  LIKE: number;
  NEUTRAL: number;
  UP_VOTE: number;
  DOWN_VOTE: number;
}

export interface IProjectSimple {
  id: number;
  title: string;
  language: string;
  grade: number;
  createdBy: CreatedBy;
  education: Education;
  hasTags: any[];
  hasLikes: HasLikes;
  excellent: boolean;
  hasTotalLikes: number;
  hasResource: boolean;
  valid: boolean;
}

export class ProjectSimple {
  id: number;
  title: string;
  language: string;
  grade: number;
  createdBy: CreatedBy;
  education: Education;
  hasTags: any[];
  hasLikes: HasLikes;
  excellent: boolean;
  hasTotalLikes: number;
  hasResource: boolean;
  valid: boolean;

  constructor(
    project: IProjectSimple
  ) {
    this.id = project.id;
    this.title = project.title;
    this.language = project.language;
    this.grade = project.grade;
    this.createdBy = project.createdBy;
    this.education = project.education;
    this.valid = project.valid;
    this.hasTags = project.hasTags;
    this.hasLikes = project.hasLikes;
    this.excellent = project.excellent;
    this.hasTotalLikes = project.hasTotalLikes;
    this.hasResource = project.hasResource;
  }
}
