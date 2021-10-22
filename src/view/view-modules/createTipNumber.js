const prepareTipNumberArgs = (i, isVertical) => {
  let positioning = 'left'; // for horizontal
  let minMax = 100 * i; // i=0 for instance=0 and i=100 for instance=1

  if (isVertical) {
    positioning = 'top';
    minMax = 100 - minMax;
  }

  //  set min = 0%, max = 100% for left/top positions
  return { i, positioning, minMax };
};

const addTipNumberToDom = (preparedData, $id) => {
  const { i, positioning, minMax } = preparedData;
  $id.append(
    `<span class='tip-number instance-${i}' style="${positioning}:${minMax}%"><span>0</span></span>`,
  );
  return { minMax, i };
};

export { prepareTipNumberArgs, addTipNumberToDom };
