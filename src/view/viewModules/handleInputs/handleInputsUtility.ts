import notify from '../../../model/runnerModules/notifyToUpdate';
import SliderView from '../../SliderView';
import { HandleInputsEventData, PanelInputsData, PanelSelectors } from '../../viewInterfaces';

const prepareInputData = function prepareInputDataForChangeModel(thisView:SliderView, panelSelectors:PanelSelectors) {
//   const eventData = event.data as HandleInputsEventData;
//   const { panelSelectors } = eventData;
  const panelInputsData: PanelInputsData = {
    minValue: panelSelectors.$minValueInput.val(),
    maxValue: panelSelectors.$maxValueInput.val(),
    runner0Value: panelSelectors.$runnerValueInput0.val(),
    runner1Value: panelSelectors.$runnerValueInput1.val(),
    runnerSize: panelSelectors.$runnerSizeInput.val(),
    fieldThickness: panelSelectors.$fieldThicknessInput.val(),
    isRange: panelSelectors.$rangeCheckbox.val(),
    hasBar: panelSelectors.$barCheckbox.val(),
    hasTip: panelSelectors.$tipCheckbox.val(),
    hasScale: panelSelectors.$scaleCheckbox.val(),
    orientation: panelSelectors.$orientationCheckbox.val(),
}

thisView.subscriber.recieveInputsData(panelInputsData)
};

export default prepareInputData;