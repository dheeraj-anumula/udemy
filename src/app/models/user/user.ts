import { UserType } from '../../types/user'

export class User implements UserType {
    id: string;
    firstName: string;
    lastName: string;
}
