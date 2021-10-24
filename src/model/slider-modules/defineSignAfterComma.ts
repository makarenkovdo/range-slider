import { calcSignAfterComma, setThisSign } from './setSignAfterComma/setSignAfterCommaUtility';

//    for small 'steps' we need to define sign quantity after comma
const defineSignAfterComma = function defineSignQuantityAfterComma() {
  setThisSign.call(this, calcSignAfterComma(this.step));
};

export default defineSignAfterComma;
