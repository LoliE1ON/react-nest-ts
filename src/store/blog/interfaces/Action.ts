import {IData} from './Data';

export interface IAction {
    type: string,
    payload: IData
}