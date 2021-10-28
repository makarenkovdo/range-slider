import RunnerModel from '../RunnerModel';
import { calcSignAfterComma, setThisSign } from './setSignAfterComma/setSignAfterCommaUtility';

//    for small 'steps' we need to define sign quantity after comma
const defineSignAfterComma = function defineSignQuantityAfterComma(): void {
  setThisSign.call(this as RunnerModel, calcSignAfterComma(this));
};

export default defineSignAfterComma;
