import FieldModel from '../../model/FieldModel';
import RunnerModel from '../../model/RunnerModel';
import { activateOnDragListener } from '../../model/runnerModules/onDrag/onDragUtility';
import assignIfHasOwn from '../../utility/assignIfOwnHas';
import SliderView from '../SliderView';
import notify from './notify';

// const onDrag = function activateOnDragUpdatingPosition(
//   runner: RunnerModel[],
//   isRange: boolean,
//   field: FieldModel,
//   runnerInstance: number,
// ): void {
//   activateOnDragListener(this, field, runner, isRange);
// };
// implementation of Adapter-pattern
const setThisData = (event: JQuery.ClickEvent) => {
  event.preventDefault();
  event.stopPropagation();
  type EventDataType = {
    thisView: SliderView;
  };
  const eventData = event.data as EventDataType;
  assignIfHasOwn;
  notify();
  // updatePosition(event, eventData.field, eventData.runner, eventData.isRange, eventData.thisRunner);
};

const activateOnDragListener = (
  thisView: SliderView,
  thisRunner: RunnerModel,
  field: FieldModel,
  runner: RunnerModel[],
  isRange: boolean,
): void => {
  thisRunner.$field.on(
    'mousedown touchstart',
    `.instance-${thisRunner.instance}`,
    (event: JQuery.DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      thisRunner.$field.addClass('tap');
      thisRunner.$field.on(
        'mousemove touchmove',
        { thisView, thisRunner, field, runner, isRange },
        setThisData,
      );
    },
  );
};

export { activateOnDragListener };
