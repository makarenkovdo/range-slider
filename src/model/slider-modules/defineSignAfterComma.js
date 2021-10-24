import { calcSignAfterComma, setThisSign } from './setSignAfterComma/setSignAfterCommaUtility';

const defineSignAfterComma = function defineSignQuantityAfterComma() {
  setThisSign.call(this, calcSignAfterComma(this.step));
};

export default defineSignAfterComma;
