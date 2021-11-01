import SliderView from '../SliderView';

const updateZIndex = function updateZIndexOfRunners(this: SliderView, instance: number): void {
  if (instance === 1) {
    this.$runners[1].css('zIndex', '1');
    this.$runners[0].css('zIndex', '0');
  } else {
    this.$runners[0].css('zIndex', '1');
    this.$runners[1].css('zIndex', '0');
  }
};
export default updateZIndex;
