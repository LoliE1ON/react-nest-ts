import {IPublicUser} from "../../../store/User/interfaces/PublicUser";

export interface IProfileProps {
    users: IPublicUser[];
    getUser(login: string): void;
}