import { Field, Slider } from '../modelInterfaces';
import { activateOnDragListener } from './onDrag/onDragUtility';

const onDrag = function activateOnDragUpdatingPosition(
  slider: Slider[],
  isRange: boolean,
  field: Field,
): void {
  activateOnDragListener(this, field, slider, isRange);
};

export default onDrag;
