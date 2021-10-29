import { UpdateRunnerValuesArgs } from './runnerInterfaces';
import {
  checkCollision,
  calculatePositionInPercent,
  calculateValue,
  calculateStepValueAndPosition,
  setPositionInPercent,
  setValue,
  setStepValueAndPosition,
} from './updateRunnerValues/updateRunnerValuesUtility';

// type UpdatePositionSubargsType = {
//   isVertical: boolean;
//   minValue: number;
//   maxValue: number;
// };
// type UpdatePositionArgsType = {
//   event: JQuery.DragEvent | JQuery.ClickEvent;
//   obj:UpdatePositionSubargsType;
//   field: FieldModel;
//   runner: RunnerModel[];
//   isRange: boolean;
//   activeRunner: RunnerModel;
// };

const updateRunnerValues = ({
  cursorXY,
  isVertical,
  minMax,
  isRange,
  fieldSize,
  runners,
  activeRunner,
}: UpdateRunnerValuesArgs): void => {
  setPositionInPercent(
    activeRunner,
    calculatePositionInPercent(isVertical, activeRunner, cursorXY, fieldSize),
  );

  setValue(activeRunner, calculateValue(minMax, activeRunner));

  // const returned = activeRunner.checkBordersCollision(stepPosition, runner);
  if (isRange) {
    setStepValueAndPosition(
      activeRunner,
      checkCollision(
        calculateStepValueAndPosition(activeRunner),
        runners,
        activeRunner,
        isVertical,
      ),
    );
  } else {
    setStepValueAndPosition(activeRunner, calculateStepValueAndPosition(activeRunner));
  }
  activeRunner.notify(this);
};

export default updateRunnerValues;
