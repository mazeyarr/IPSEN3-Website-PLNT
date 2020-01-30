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
  jwt?: any;
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

export interface HasTag {
  id: number;
  name: string;
}

export interface HasLikes {
  DOWN_VOTE: any[];
  NEUTRAL: any[];
  DISLIKE: any[];
  LIKE: any[];
  UP_VOTE: any[];
}

export interface HasResource {
  resourceUrl?: string;
  createdAt?: number;
  expiresAt?: number;
}

export interface IProject {
  id: number;
  title: string;
  language: string;
  description: string;
  grade: number;
  createdBy: CreatedBy;
  education: Education;
  valid: boolean;
  hasTags: HasTag[];
  hasLikes: HasLikes;
  excellent: boolean;
  hasTotalLikes: number;
  hasResource: HasResource;
}

export class Project {
  id: number;
  title: string;
  language: string;
  description: string;
  grade: number;
  createdBy: CreatedBy;
  education: Education;
  valid: boolean;
  hasTags: HasTag[];
  hasLikes: HasLikes;
  excellent: boolean;
  hasTotalLikes: number;
  hasResource: HasResource;


  constructor(
    project: IProject
  ) {
    this.id = project.id;
    this.title = project.title;
    this.language = project.language;
    this.description = project.description;
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

  static tableHeadProperties(): string[] {
    return ['Titel', 'Taal', 'Resultaat', 'Vak', 'Instelling', 'Likes'];
  }
}
