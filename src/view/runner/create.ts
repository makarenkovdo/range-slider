import { setThis, addRunnerToDOM, prepareRunnerArgs } from './create/createUtility';
import Runner from './Runner';

const create = function addRunnerToDOMAndSetThis$runner(
  this: Runner,
  i: number,
  stepPosition:number,
): void {
  $().ready(() => {
    addRunnerToDOM(
      prepareRunnerArgs(
        i, this.parent.isVertical, this.size, this.parent.fieldSize, stepPosition,
      ), this.parent.$field, this.size, this.parent.orientation,
    );

    setThis.call(this, i, stepPosition);
  });
};

export default create;
