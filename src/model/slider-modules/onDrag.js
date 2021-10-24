import { activateOnDragListener } from './onDrag/onDragUtility';

const onDrag = function activateOnDragUpdatingPosition(slider, isRange, field) {
  activateOnDragListener(this, field, slider, isRange);
};

export default onDrag;
