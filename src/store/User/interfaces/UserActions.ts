import {ISetCurrentUserAction} from "./SetCurrentUserAction";
import {ISetProfileUser} from "./SetProfileUser";

export type UserActions = ISetCurrentUserAction | ISetProfileUser;