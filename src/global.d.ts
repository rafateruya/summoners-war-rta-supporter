import 'reactn';
import { GlobalStateType } from './globalState/initialState';

declare module 'reactn/default' {

    export interface State extends GlobalStateType { }
}