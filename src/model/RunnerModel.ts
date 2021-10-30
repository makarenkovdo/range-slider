/* eslint-env jquery */

import SliderPresenter from '../presenter/SliderPresenter';
import defineSignAfterComma from './runnerModules/defineSignAfterComma';
import initializeDefaultValues from './runnerModules/initializeDefaultValues';
import notify from './runnerModules/notify';
import updateRunnerValues from './runnerModules/updateRunnerValues';
import setStep from './runnerModules/setStep';
import { UpdateRunnerValuesArgs } from './runnerModules/runnerInterfaces';

class RunnerModel {
  // id: string;

  // class: string;

  // $field: JQuery<HTMLElement>;

  instance: number;

  // $runner: JQuery<HTMLElement>;

  // size: number[];

  positionInPercent: number;

  value: number;

  step: number;

  stepSignAfterComma: number;

  stepPosition: number;

  stepValue: number;

  subscriber: SliderPresenter;

  defineSignAfterComma: (this: RunnerModel) => void;

  notify: (that: RunnerModel) => void;

  setStep: (step: number) => void;

  updateRunnerValues: (updateRunnerValuesArgs: UpdateRunnerValuesArgs) => void;

  initializeDefaultValues: (a: number[]) => void;

  constructor(id: string, instance: number, subscriber: SliderPresenter) {
    // this.id = id;
    // this.class = $(`#${this.id}`).attr('class');
    // this.$field = $field;
    this.instance = instance;
    // this.$runner = '';
    // this.size = runnerSize;
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
