import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import { PanelSelectors } from '../viewInterfaces';
import {
  addOnChangeListener, initializePanel, selectPanelNodes,
} from './activate/activateUtility';
import Panel from './Panel';

const activate = function activatePanelAndHandleChanges(
  this:Panel,
  params: PresenterBuildParams,
):void {
  console.log('this', this);

  const panelSelectors: PanelSelectors = selectPanelNodes(this.parent.id);
  initializePanel(params, panelSelectors);
  addOnChangeListener.call(this, panelSelectors);
};

export default activate;
