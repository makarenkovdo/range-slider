import { prepareScaleData, addScaleToDom } from './create/createUtility';
import Scale from './Scale';

const create = function createScaleAndAddToDom(this: Scale): void {
  const {
    isVertical, $field, fieldSize, runner, minMax, orientation,
  } = this.parent;
  $(document).ready(() => {
    addScaleToDom(
      isVertical,
      $field,
      fieldSize,
      runner.step,
      runner.stepSignAfterComma,
      minMax,
      orientation,
      prepareScaleData(
        fieldSize, isVertical, minMax, runner.step,
      ),
    );
    // setThis.call(this, i);
  });
};

export default create;
