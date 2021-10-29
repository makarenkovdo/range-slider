import { HandleClickDataType } from './fieldModulesInterfaces';
import defineNearestRunner from './handleClick/defineNearestRunner';

const handleClick = (event: JQuery.ClickEvent): void => {
  const { fieldSize, runners, isVertical, isRange } = event.data as HandleClickDataType;
  const cursorXY = [event.offsetX, event.offsetY];

  let nearest = 0;

  if (isRange) {
    nearest = defineNearestRunner(
      cursorXY,
      [runners[0].positionInPercent, runners[1].positionInPercent],
      isVertical,
      fieldSize,
    );
  }
  runners[nearest].updateRunnerValues(
    cursorXY,
    isVertical, 
    minValue, 
    maxValue },
    runners,
    isRange,
    runners[nearest],
    fieldSize,
  );
};

export default handleClick;
