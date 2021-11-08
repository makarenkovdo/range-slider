import { Orientation } from '../../../presenter/presenterInterfaces';
import { UpdateTipNumberArgs } from '../../viewInterfaces';

export type PreparedDataType = {
  instance: number;
  positioning: string[];
  position: number[];
};

const prepareTipNumberArgs = (i: number, isVertical: boolean, fieldSize: number[]): PreparedDataType => {
  let positioning = ['left']; // for horizontal
  let position = [100 * i - ((20 / fieldSize[0]) * 100)]; // i=0 for instance=0 and i=100 for instance=1
  let instance = i;

  if (isVertical) {
    positioning = ['top'];
    position = [100 - 100 * i - ((20 / fieldSize[1]) * 100)];
    instance = i;
  }

  //  set min = 0%, max = 100% for left/top positions
  return { instance, positioning, position } as PreparedDataType;
};

const addTipNumberToDOM = (
  preparedData: PreparedDataType,
  $id: JQuery<HTMLElement>,
  orientation: Orientation,
  minMax: number[],
): UpdateTipNumberArgs => {
  const {
    instance, positioning, position,
  } = preparedData;
  $id.append(
    `<span data-testid="test-tip-number-${instance}" class='slider__tip slider__tip_${orientation} js-slider__tip_instance-${instance}' style="${positioning[0]}:${position[0]}%"><span>0</span></span>`,
  );
  $id.find(`.js-slider__tip_instance-${instance} span`).text(`${minMax[instance]}`);

  return { stepValue: position[0], instance };
};

export { prepareTipNumberArgs, addTipNumberToDOM };
