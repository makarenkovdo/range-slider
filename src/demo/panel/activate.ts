import { BuildParams } from '../../presenter/presenterInterfaces';
import {
  addOnChangeListener, initializePanel, selectPanelNodes,
} from './activate/activateUtility';
import Panel from './Panel';

const activate = function activatePanelAndHandleChanges(
  this:Panel,
  params: BuildParams,
):void {
  selectPanelNodes.call(this);
  initializePanel.call(this, params);
  addOnChangeListener.call(this);
};

export default activate;
