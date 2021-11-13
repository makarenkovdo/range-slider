import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import SliderView from '../SliderView';
import { PanelSelectors } from '../viewInterfaces';
import {
  addOnChangeListener, initializePanel, selectPanelNodes,
} from './activatePanel/activatePanelUtility';
import Panel from './Panel';

const activatePanel = function activatePanelAndHandleChanges(
  this:Panel,
  params: PresenterBuildParams,
):void {
  console.log('this', this);
  
  const panelSelectors: PanelSelectors = selectPanelNodes(this.parent.id);
  initializePanel(params, panelSelectors);
  addOnChangeListener.call(this, panelSelectors);
};

export default activatePanel;
