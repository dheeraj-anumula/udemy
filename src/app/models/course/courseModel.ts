import { CourseType } from '../../types/course'

export class CourseModel implements CourseType {
    id : string;
    title : string;
    creationDate: Date;
    duration: number;
    description: string;
}
