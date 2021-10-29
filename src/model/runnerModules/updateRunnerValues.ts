import SliderView from '../../view/SliderView';
import RunnerModel from '../RunnerModel';
import {
  checkCollision,
  calculatePositionInPercent,
  calculateValue,
  calculateStepValueAndPosition,
  setPositionInPercent,
  setValue,
  setStepValueAndPosition,
} from './updateRunnerValues/updateRunnerValuesUtility';

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

const updateRunnerValues = (
  cursorXY: number[],
  { isVertical, minMax, isRange, fieldSize }: SliderView,
  runner: RunnerModel[],
  thisRunner: RunnerModel,
): void => {
  setPositionInPercent(
    thisRunner,
    calculatePositionInPercent(isVertical, thisRunner, cursorXY, fieldSize),
  );

  setValue(thisRunner, calculateValue(minMax, thisRunner));

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

export default updateRunnerValues;
