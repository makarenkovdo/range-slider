import { UpdateTipNumberArgs } from '../../viewInterfaces';

export type PreparedDataType = {
  i: number;
  positioning: string;
  position: number;
  modificator: string;
};

const prepareTipNumberArgs = (i: number, isVertical: boolean): PreparedDataType => {
  let positioning = 'left'; // for horizontal
  let position = 100 * i; // i=0 for instance=0 and i=100 for instance=1

  if (isVertical) {
    positioning = 'top';
    position = 100 - position;
  }
  const modificator = isVertical ? 'vertical' : 'horizontal';

  //  set min = 0%, max = 100% for left/top positions
  return { i, positioning, position, modificator } as PreparedDataType;
};

const addTipNumberToDOM = (
  preparedData: PreparedDataType,
  $id: JQuery<HTMLElement>,
): UpdateTipNumberArgs => {
  const { i, positioning, position, modificator } = preparedData;

  $id.append(
    `<span data-testid="test-tip-number-${i}" class='slider__tip slider__tip_${modificator} js-slider__tip_instance-${i}' style="${positioning}:${position}%"><span>0</span></span>`,
  );
  return { stepValue: position, instance: i };
};

export { prepareTipNumberArgs, addTipNumberToDOM };
