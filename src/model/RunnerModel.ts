/* eslint-env jquery */

import SliderPresenter from '../presenter/SliderPresenter';
import defineSignAfterComma from './runnerModules/defineSignAfterComma';
import initializeDefaultValues from './runnerModules/initializeDefaultValues';
import setStep from './runnerModules/setStep';
import { NotifyMessageType, UpdateRunnerValuesArgs } from './runnerModules/runnerInterfaces';
import { PresenterBuildParams } from '../presenter/presenterInterfaces';
import { PanelInputsData } from '../view/viewInterfaces';
import setValuesFromInputs from './runnerModules/setValuesFromInputs';
import notifyToUpdate from './runnerModules/notifyToUpdate';
import notifyToRebuild from './runnerModules/notifyToRebuild';
import updateRunnerValues from './runnerModules/updateRunnerValues';

class RunnerModel {
  public instance: number;

  public positionInPercent: number;

  public value: number;

  public step: number;

  public stepInPercent: number;

  public stepSignAfterComma: number;

  public stepPosition: number;

  public stepValue: number;

  public subscriber: SliderPresenter;

  public defineSignAfterComma: (this: RunnerModel) => void;

  public notifyToUpdate: (
    this: RunnerModel, messageType: NotifyMessageType, rebuildData?: PresenterBuildParams
  ) => void;

  public notifyToRebuild: (
    this: RunnerModel, messageType: NotifyMessageType, rebuildData?: PresenterBuildParams
  ) => void;

  public setStep: (step: number, minMax: number[]) => void;

  public setValuesFromInputs:(this: RunnerModel, panelInputsData:PanelInputsData) => void;

  public updateRunnerValues: (updateRunnerValuesArgs: UpdateRunnerValuesArgs) => void;

  public initializeDefaultValues: (minMax: number[], runnersInstantPosition:number[]) => void;

  constructor(id: string, instance: number, subscriber: SliderPresenter) {
    this.instance = instance;
    this.positionInPercent = 0;
    this.value = 0;
    this.step = 1;
    this.stepInPercent = 1;
    this.stepSignAfterComma = 0;
    this.stepPosition = 0;
    this.stepValue = 0;
    this.subscriber = subscriber;

    this.defineSignAfterComma = defineSignAfterComma.bind(this) as () => void;
    this.notifyToUpdate = notifyToUpdate.bind(this) as () => void;
    this.notifyToRebuild = notifyToRebuild.bind(this) as () => void;
    this.setStep = setStep.bind(this) as () => void;
    this.updateRunnerValues = updateRunnerValues.bind(this) as () => void;
    this.initializeDefaultValues = initializeDefaultValues.bind(this) as () => void;
    this.setValuesFromInputs = setValuesFromInputs.bind(this) as () => void;
  }
}
export default RunnerModel;
