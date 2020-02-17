import {IUser} from "./User";
import {IPublicUser} from "./PublicUser";

export interface IUserState {
    currentUser: IUser;
    profileUser: IPublicUser[];
}