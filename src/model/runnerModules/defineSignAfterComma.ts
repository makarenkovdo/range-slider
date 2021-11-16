import RunnerModel from '../RunnerModel';
import { calcSignAfterComma, setThisSign } from './setSignAfterComma/setSignAfterCommaUtility';

//    for small 'steps' and 'minValue' we need to define sign quantity after comma
const defineSignAfterComma = function defineSignQuantityAfterComma(minMax: number[]): void {
  setThisSign.call(this as RunnerModel, calcSignAfterComma(this, minMax));
};

export default defineSignAfterComma;
