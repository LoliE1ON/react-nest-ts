import {IPublicUser} from "../../store/User/interfaces/PublicUser";

export interface IUserContainerProps {
    users: IPublicUser[];
    getUser(login: string): void;
}