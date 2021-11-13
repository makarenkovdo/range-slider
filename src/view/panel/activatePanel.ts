import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import SliderView from '../SliderView';
import { PanelSelectors } from '../viewInterfaces';
import {
  addOnChangeListener, initializePanel, selectPanelNodes,
} from './activatePanel/activatePanelUtility';

const activatePanel = function activatePanelAndHandleChanges(
  this:SliderView,
  params: PresenterBuildParams,
):void {
  const panelSelectors: PanelSelectors = selectPanelNodes(this.id);
  initializePanel(params, panelSelectors);
  addOnChangeListener.call(this, panelSelectors);
};

export default activatePanel;
