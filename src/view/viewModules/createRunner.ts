import SliderView from '../SliderView';
import { setThis, addRunnerToDOM, prepareRunnerArgs } from './createRunner/createRunnerUtility';

const createRunner = function addRunnerToDOMAndSetThis$runner(this: SliderView, i: number,runnersInstantPosition:number[]): void {
  $().ready(() => {
    addRunnerToDOM(
      prepareRunnerArgs(
        i, this.isVertical, this.runnerSize, this.fieldSize, runnersInstantPosition,
      ), this.$field, this.runnerSize, this.orientation,
    );

    setThis.call(this, i);
  });
};

export default createRunner;
