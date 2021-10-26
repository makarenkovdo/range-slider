import FieldModel from '../field-model';
import SliderModel from '../slider-model';
import { activateOnDragListener } from './onDrag/onDragUtility';

const onDrag = function activateOnDragUpdatingPosition(
  slider: SliderModel[],
  isRange: boolean,
  field: FieldModel,
): void {
  activateOnDragListener(this, field, slider, isRange);
};

export default onDrag;
