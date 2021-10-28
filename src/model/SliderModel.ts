/* eslint-env jquery */

import RunnerController from '../presenter/SliderPresenter';
import FieldModel from './FieldModel';
import defineSignAfterComma from './runner-modules/defineSignAfterComma';
import initializeDefaultValues from './runner-modules/initializeDefaultValues';
import notify from './runner-modules/notify';
import onDrag from '../view/view-modules/onDrag';
import { updatePosition } from './runner-modules/onDrag/onDragUtility';
import onDrop from '../view/view-modules/onDrop';
import setStep from './runner-modules/setStep';

class RunnerModel {
  id: string;

  class: string;

  $field: JQuery<HTMLElement>;

  instance: number;

  $runner: JQuery<HTMLElement>;

  size: number[];

  positionInPercent: number;

  value: number;

  step: number;

  stepSignAfterComma: number;

  stepPosition: number;

  stepValue: number;

  subscriber: RunnerController;

  defineSignAfterComma: (step: number) => void;

  notify: (that: RunnerModel) => void;

  setStep: (step: number) => void;

  updatePosition: (
    event: JQuery.ClickEvent,
    field: FieldModel,
    runners: RunnerModel[],
    isRange: boolean,
    runner: RunnerModel,
  ) => void;

  initializeDefaultValues: (a: number[]) => void;

  constructor(
    id: string,
    instance: number,
    subscriber: RunnerController,
    runnerSize: number[],
    $field: JQuery<HTMLElement>,
  ) {
    this.id = id;
    this.class = $(`#${this.id}`).attr('class');
    this.$field = $field;
    this.instance = instance;
    // this.$runner = '';
    this.size = runnerSize;
    this.positionInPercent = 0;
    this.value = 0;
    this.step = 1;
    this.stepSignAfterComma = 0;
    this.stepPosition = 0;
    this.stepValue = 0;
    this.subscriber = subscriber;

    this.defineSignAfterComma = defineSignAfterComma.bind(this) as () => void;
    this.notify = notify.bind(this) as () => void;
    this.setStep = setStep.bind(this) as () => void;
    this.updatePosition = updatePosition.bind(this) as () => void;
    this.initializeDefaultValues = initializeDefaultValues.bind(this) as () => void;
  }
}
export default RunnerModel;
