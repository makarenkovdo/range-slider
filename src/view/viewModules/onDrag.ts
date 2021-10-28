import FieldModel from '../../model/FieldModel';
import RunnerModel from '../../model/RunnerModel';
import { activateOnDragListener } from '../../model/runner-modules/onDrag/onDragUtility';

const onDrag = function activateOnDragUpdatingPosition(
  runner: RunnerModel[],
  isRange: boolean,
  field: FieldModel,
): void {
  activateOnDragListener(this, field, runner, isRange);
};
// implementation of Adapter-pattern
const onMove = (event: JQuery.ClickEvent) => {
  event.preventDefault();
  event.stopPropagation();
  type EventDataType = {
    field: FieldModel;
    runner: RunnerModel[];
    isRange: boolean;
    thisRunner: RunnerModel;
  };
  const eventData = event.data as EventDataType;
  updatePosition(event, eventData.field, eventData.runner, eventData.isRange, eventData.thisRunner);
};

const activateOnDragListener = (
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
        {
          thisRunner,
          field,
          runner,
          isRange,
        },
        onMove,
      );
    },
  );
};

export { activateOnDragListener, updatePosition };
