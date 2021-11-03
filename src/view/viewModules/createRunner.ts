import SliderView from '../SliderView';
import { setThis, addRunnerToDOM, prepareRunnerArgs } from './createRunner/createRunnerUtility';

// how to test? this.$runner is a the result of div-appending and ALL THIS MODULE

const createRunner = function addRunnerToDOMAndSetThis$runner(this: SliderView, i: number): void {
  $().ready(() => {
    addRunnerToDOM(
      prepareRunnerArgs(
        i, this.isVertical, this.runnerSize, this.fieldSize), this.$field, this.runnerSize,
    );
  });
  setThis.call(this, i);
};

export default createRunner;
