import RunnerModel from '../RunnerModel';
import { calcSignAfterComma, setThisSign } from './setSignAfterComma/setSignAfterCommaUtility';

//    for small 'steps' and 'minValue' we need to define sign quantity after comma
const defineSignAfterComma = function defineSignQuantityAfterComma(this:RunnerModel, minMax: number[]): number {
  setThisSign.call(this, calcSignAfterComma(this, minMax));
  return this.stepSignAfterComma

};

export default defineSignAfterComma;
