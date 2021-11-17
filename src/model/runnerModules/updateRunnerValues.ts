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
  console.log('activeRunner', activeRunner);
  
  setPositionInPercent(
    activeRunner,
    calculatePositionInPercent(isVertical, activeRunner, cursorXY, fieldSize),
  );

  setValue(activeRunner, calculateValue(minMax, activeRunner));

  if (isRange) {
    console.log(isRange, 'ISRANGE TRUE');
    
    setStepValueAndPosition(
      activeRunner,
      checkCollision(
        calculateStepValueAndPosition(activeRunner, minMax),
        runners,
        activeRunner,
        isVertical,
      ),
    );
  } else {
    setStepValueAndPosition(
      activeRunner,
      calculateStepValueAndPosition(activeRunner, minMax),
    );
  }
  activeRunner.notifyToUpdate.call(this);
};

export default updateRunnerValues;
