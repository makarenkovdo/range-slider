const updateTipNumber = function updateTipNumberAtDOM(stepValue, instance) {
  this.$field.find(`.instance-${instance} span`).text(`${stepValue}`);
};

export default updateTipNumber;
