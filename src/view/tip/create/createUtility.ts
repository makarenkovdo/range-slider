import { Orientation } from '../../../presenter/presenterInterfaces';
import { UpdateTipNumberArgs } from '../../viewInterfaces';

export type PreparedDataType = {
  instance: number;
  positioning: string[];
  position: number[];
};

const prepareTipNumberArgs = (
  i: number,
  isVertical: boolean,
  fieldSize: number[],
  stepPosition:number,

): PreparedDataType => {
  let positioning = ['left'];
  let instance = i;

  if (isVertical) {
    instance = i;
    positioning = ['top'];
  }

  const position = isVertical
    ? [fieldSize[1] - (stepPosition * (fieldSize[1] / 100)) - 10]
    : [((stepPosition * (fieldSize[0] / 100)) - 20)];
  return { instance, positioning, position } as PreparedDataType;
};

const addTipNumberToDOM = (
  preparedData: PreparedDataType,
  $id: JQuery<HTMLElement>,
  orientation: Orientation,
  minMax: number[],
  stepValue:number,

): UpdateTipNumberArgs => {
  const {
    instance, positioning, position,
  } = preparedData;
  $id.append(
    `<span data-testid="test-tip-number-${instance}" class='slider__tip slider__tip_${orientation} js-slider__tip_instance-${instance}' style="${positioning[0]}:${position[0]}px"><span>0</span></span>`,
  );
  $id.find(`.js-slider__tip_instance-${instance} span`).text(`${stepValue}`);

  return { stepValue: position[0], instance };
};

export { prepareTipNumberArgs, addTipNumberToDOM };
