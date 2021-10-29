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
const setThisData = (event: JQuery.ClickEvent) => {
  event.preventDefault();
  event.stopPropagation();
  type EventDataType = {
    thisView: SliderView;
    instance: number;
  };
  const eventData = event.data as EventDataType;
  // type TKey = 'stepPosition' | 'stepValue' | 'value' | 'positionInPercent';
  // const assignIfHasOwn = (obj: SliderView, key: TKey, value: number | number[]) => {
  //   const newObj: SliderView = obj;
  //   if (Object.prototype.hasOwnProperty.call(obj, key)) {
  //     newObj[key] = value; // enum???
  //   }
  // };
  // assignIfHasOwn(eventData.thisView, 'cursorXY', [event.offsetX, event.offsetY]);

  eventData.thisView.notify([event.offsetX, event.offsetY], eventData.instance);
};

const activateOnDragListener = function activateOnDragListenerAndNotify(
  this: SliderView,
  instance: number,
): void {
  console.log('add', this.$field, instance);

  this.$field.on('mousedown touchstart', `.instance-${instance}`, (event: JQuery.DragEvent) => {
    console.log('add', this.$field, instance);

    event.preventDefault();
    event.stopPropagation();
    this.$field.addClass('tap');
    this.$field.on('mousemove touchmove', { thisView: this, instance }, setThisData);
  });
};

export default activateOnDragListener;
