const updateTipNumber = function updateTipNumberAtDOM(stepValue: number, instance: number): void {
  this.$field.find(`.instance-${instance} span`).text(`${stepValue}`);
};

export default updateTipNumber;
