/* eslint-env jquery */

import SliderPresenter from '../presenter/SliderPresenter';
import FieldModel from './FieldModel';
import defineSignAfterComma from './runnerModules/defineSignAfterComma';
import initializeDefaultValues from './runnerModules/initializeDefaultValues';
import notify from './runnerModules/notify';
import updateRunnerValues from './runnerModules/updateRunnerValues';
import setStep from './runnerModules/setStep';

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

  subscriber: SliderPresenter;

  defineSignAfterComma: (step: number) => void;

  notify: (that: RunnerModel) => void;

  setStep: (step: number) => void;

  updateRunnerValues: (
    cursorXY: number[],
    field: FieldModel,
    runners: RunnerModel[],
    isRange: boolean,
    runner: RunnerModel,
    fieldSize: number[],
  ) => void;

  initializeDefaultValues: (a: number[]) => void;

  constructor(
    id: string,
    instance: number,
    subscriber: SliderPresenter,
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
    this.updateRunnerValues = updateRunnerValues.bind(this) as () => void;
    this.initializeDefaultValues = initializeDefaultValues.bind(this) as () => void;
  }
}
export default RunnerModel;
