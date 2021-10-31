/* eslint-env jquery */

import SliderPresenter from '../presenter/SliderPresenter';
import defineSignAfterComma from './runnerModules/defineSignAfterComma';
import initializeDefaultValues from './runnerModules/initializeDefaultValues';
import notify from './runnerModules/notify';
import updateRunnerValues from './runnerModules/updateRunnerValues';
import setStep from './runnerModules/setStep';
import { UpdateRunnerValuesArgs } from './runnerModules/runnerInterfaces';

class RunnerModel {
  public instance: number;

  public positionInPercent: number;

  public value: number;

  public step: number;

  public stepSignAfterComma: number;

  public stepPosition: number;

  public stepValue: number;

  public subscriber: SliderPresenter;

  public defineSignAfterComma: (this: RunnerModel) => void;

  public notify: (that: RunnerModel) => void;

  public setStep: (step: number) => void;

  public updateRunnerValues: (updateRunnerValuesArgs: UpdateRunnerValuesArgs) => void;

  public initializeDefaultValues: (a: number[]) => void;

  constructor(id: string, instance: number, subscriber: SliderPresenter) {
    this.instance = instance;
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
