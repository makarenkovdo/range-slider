import SliderView from '../SliderView';

const updateZIndex = function updateZIndexOfRunners(this: SliderView, instance: number): void {
  $(document).ready(() => { //todo: window.onload ????
    this.$runners[instance].addClass('slider__runner_current');
  });
};

export default updateZIndex;
