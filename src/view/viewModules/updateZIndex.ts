import SliderView from '../SliderView';

const updateZIndex = function updateZIndexOfRunners(this: SliderView, instance: number): void {
  $(document).ready(() => {
    this.$runners[instance].addClass('current');
  });
};

export default updateZIndex;
