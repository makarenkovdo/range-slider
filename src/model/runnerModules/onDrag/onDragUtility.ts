import RunnerModel from '../../RunnerModel';
import {
  checkCollision,
  calculatePositionInPercent,
  calculateValue,
  calculateStepValueAndPosition,
  setPositionInPercent,
  setValue,
  setStepValueAndPosition,
} from './updatePositionUtility';

type UpdatePositionSubargsType = {
  isVertical: boolean;
  minValue: number;
  maxValue: number;
};
// type UpdatePositionArgsType = {
//   event: JQuery.DragEvent | JQuery.ClickEvent;
//   obj:UpdatePositionSubargsType;
//   field: FieldModel;
//   runner: RunnerModel[];
//   isRange: boolean;
//   thisRunner: RunnerModel;
// };

const updatePosition = (
  cursorXY: number[],
  { isVertical, minValue, maxValue }: UpdatePositionSubargsType,
  runner: RunnerModel[],
  isRange: boolean,
  thisRunner: RunnerModel,
): void => {
  setPositionInPercent(thisRunner, calculatePositionInPercent(isVertical, thisRunner, cursorXY));

  setValue(thisRunner, calculateValue(minValue, maxValue, thisRunner));

  // const returned = thisRunner.checkBordersCollision(stepPosition, runner);
  if (isRange) {
    setStepValueAndPosition(
      thisRunner,
      checkCollision(calculateStepValueAndPosition(thisRunner), runner, thisRunner, isVertical),
    );
  } else {
    setStepValueAndPosition(thisRunner, calculateStepValueAndPosition(thisRunner));
  }
  thisRunner.notify(this);
};

export default updatePosition;
