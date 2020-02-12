import {IToggleAuthAction} from "./ToggleAuthAction";
import {IIsLoadingAction} from "./IsLoadingAction";
import {ISetShowErrorAction} from "./SetShowErrorAction";

export type TAuthActions = IToggleAuthAction | IIsLoadingAction | ISetShowErrorAction;