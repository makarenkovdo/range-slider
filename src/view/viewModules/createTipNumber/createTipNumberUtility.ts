import { UpdateTipNumberArgs } from '../../viewInterfaces';

export type PreparedDataType = {
  i: number;
  positioning: string;
  minMax: number;
};

const prepareTipNumberArgs = (i: number, isVertical: boolean): PreparedDataType => {
  let positioning = 'left'; // for horizontal
  let minMax = 100 * i; // i=0 for instance=0 and i=100 for instance=1

  if (isVertical) {
    positioning = 'top';
    minMax = 100 - minMax;
  }

  //  set min = 0%, max = 100% for left/top positions
  return { i, positioning, minMax } as PreparedDataType;
};

const addTipNumberToDOM = (
  preparedData: PreparedDataType,
  $id: JQuery<HTMLElement>,
): UpdateTipNumberArgs => {
  const { i, positioning, minMax } = preparedData;
  $id.append(
    `<span data-testid="test-tip-number-${i}" class='tip-number js-tip-number js-instance-${i}' style="${positioning}:${minMax}%"><span>0</span></span>`,
  );
  return { stepValue: minMax, instance: i };
};

export { prepareTipNumberArgs, addTipNumberToDOM };
