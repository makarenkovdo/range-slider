import { Orientation } from '../../presenter/presenterInterfaces';
import FieldModel from '../FieldModel';

const setIsVertical = function setSliderOrientation(
  this: FieldModel,
  orientation: Orientation,
): void {
  this.isVertical = orientation === 'vertical';
};

export default setIsVertical;
