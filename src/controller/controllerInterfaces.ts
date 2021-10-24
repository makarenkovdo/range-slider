import { Field, Slider } from '../model/modelInterfaces';
import { View } from '../view/viewInterfaces';

interface ControllerBuildParams {
  minValue?: number;
  maxValue?: number;
  step?: number;
  shouldAddTip?: boolean;
  shouldAddBar?: boolean;
  isRange?: boolean;
  sliderSize?: number[];
}

interface Controller {
  id: string;

  hasBar: boolean;

  isRange: boolean;

  sliderCounter: number;

  field: Field;

  slider: Array<Slider>;

  view: View;

  build: () => void;
}

export { ControllerBuildParams, Controller };
