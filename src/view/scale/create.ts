import { prepareScaleData, addScaleToDom } from './create/createUtility';
import Scale from './Scale';

const create = function createScaleAndAddToDom(this: Scale): void {
  $(document).ready(() => {
    const {
      isVertical, $field, fieldSize, runner, minMax, orientation,
    } = this.parent;
    addScaleToDom(
      isVertical,
      $field,
      fieldSize,
      runner.step,
      runner.stepSignAfterComma,
      minMax,
      orientation,
      prepareScaleData(
        fieldSize,
        isVertical,
        minMax,
        runner.step,
        runner.stepSignAfterComma,
      ),
    );
    // setThis.call(this, i);
  });
};

export default create;
