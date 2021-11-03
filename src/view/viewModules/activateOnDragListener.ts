// import assignIfHasOwn from '../../utility/assignIfOwnHas';
import SliderView from '../SliderView';
// import notify from './notify';

// const onDrag = function activateOnDragUpdatingPosition(
//   runner: RunnerModel[],
//   isRange: boolean,
//   field: FieldModel,
//   runnerInstance: number,
// ): void {
//   activateOnDragListener(this, field, runner, isRange);
// };
// implementation of Adapter-pattern
const notifySubscriber = (event: JQuery.ClickEvent) => {
  event.preventDefault();
  event.stopPropagation();
  type EventDataType = {
    thisView: SliderView;
    instance: number;
  };
  const eventData = event.data as EventDataType;
  console.log(event.offsetX, event.pageX, eventData.thisView.$field.position().left);
  eventData.thisView.notifySliderMoving(
    [
      event.pageX - eventData.thisView.$field.position().left,
      event.pageY - eventData.thisView.$field.position().top,
    ],
    eventData.instance,
  );
};

const activateOnDragListener = function activateOnDragListenerAndNotify(
  this: SliderView,
  instance: number,
): void {
  this.$field.on('mousedown touchstart', `.js-instance-${instance}`, (event: JQuery.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    this.$field.addClass('tap');
    $('body').on('mousemove touchmove', { thisView: this, instance }, notifySubscriber);
  });
};

export default activateOnDragListener;
