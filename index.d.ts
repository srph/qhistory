import { History } from 'history';

declare type Stringify = (query: any) => string;
declare type Parse = (query: string) => any;
declare const historyWithQuery: (history: History, stringify: Stringify, parse: Parse) => History;

export default historyWithQuery;
