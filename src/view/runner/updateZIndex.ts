import Runner from './Runner';

const updateZIndex = function updateZIndexOfRunners(this: Runner, instance: number): void {
  $(document).ready(() => {
    this.$elements[instance].addClass('slider__runner_current');
  });
};

export default updateZIndex;
