export interface Role {
  id: number;
  userId: number;
  role: string;
}

export interface IUser {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  jwt?: string;
  roles: Role[];
}

export class User {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  jwt?: string;
  roles: Role[];

  constructor(user: IUser) {
    this.id = user.id;
    this.username = user.username;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.jwt = user.jwt;
    this.roles = user.roles;
  }

  getFullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
