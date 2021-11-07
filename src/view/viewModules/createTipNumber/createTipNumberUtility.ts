import { Orientation } from '../../../presenter/presenterInterfaces';
import { UpdateTipNumberArgs } from '../../viewInterfaces';

export type PreparedDataType = {
  i: number;
  positioning: string[];
  position: number[];
};

const prepareTipNumberArgs = (i: number, isVertical: boolean): PreparedDataType => {
  let positioning = ['left']; // for horizontal
  let position = [100 * i]; // i=0 for instance=0 and i=100 for instance=1

  if (isVertical) {
    positioning = ['top'];
    position = [100 - position[0]];
  }

  //  set min = 0%, max = 100% for left/top positions
  return { i, positioning, position } as PreparedDataType;
};

const addTipNumberToDOM = (
  preparedData: PreparedDataType,
  $id: JQuery<HTMLElement>,
  orientation: Orientation,
): UpdateTipNumberArgs => {
  const {
    i, positioning, position,
  } = preparedData;

  $id.append(
    `<span data-testid="test-tip-number-${i}" class='slider__tip slider__tip_${orientation} js-slider__tip_instance-${i}' style="${positioning[0]}:${position[0]}%"><span>0</span></span>`,
  );
  return { stepValue: position[0], instance: i };
};

export { prepareTipNumberArgs, addTipNumberToDOM };
