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
