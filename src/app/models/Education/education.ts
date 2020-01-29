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

export class Education {
  id: number;
  title: string;
  institute: IInstitute;

  constructor(education: IEducation) {
    this.id = education.id;
    this.title = education.title;
    this.institute = education.institute;
  }
}
