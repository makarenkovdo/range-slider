import SliderView from '../SliderView';
import { RunnersInstantPosition } from '../viewInterfaces';
import { setThis, addRunnerToDOM, prepareRunnerArgs } from './createRunner/createRunnerUtility';

const createRunner = function addRunnerToDOMAndSetThis$runner(
  this: SliderView,
  i: number,
  stepPosition:number,
): void {
  $().ready(() => {
    addRunnerToDOM(
      prepareRunnerArgs(
        i, this.isVertical, this.runnerSize, this.fieldSize, stepPosition,
      ), this.$field, this.runnerSize, this.orientation,
    );

    setThis.call(this, i);
  });
};

export default createRunner;
