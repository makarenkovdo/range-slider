import { defineNearestRunner } from './onClick/defineNearestRunner';

const handleClick = (event: JQuery.ClickEvent): void => {
  const { $field, fieldSize, runners, isVertical, isRange } = event.data as DataType;
  const cursorXY = [event.offsetX, event.offsetY];

  let nearest = 0;

  // prettier-ignore
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
    { isVertical, minValue, maxValue },
    runners,
    isRange,
    runners[nearest],
    fieldSize,
  );
};

export default handleClick;
