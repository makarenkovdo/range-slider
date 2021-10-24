const initDataStartEnd = ({ $element, minValue, maxValue }) => {
  $element.attr('data-start', minValue);
  $element.attr('data-end', maxValue);

  return this;
};

export default initDataStartEnd;
