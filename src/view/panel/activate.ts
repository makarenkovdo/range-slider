import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import {
  addOnChangeListener, initializePanel, selectPanelNodes,
} from './activate/activateUtility';
import Panel from './Panel';

const activate = function activatePanelAndHandleChanges(
  this:Panel,
  params: PresenterBuildParams,
):void {
  selectPanelNodes.call(this);
  initializePanel.call(this, params);
  if (!this.parent.hasPanel) {
    addOnChangeListener.call(this);
  }
};

export default activate;
