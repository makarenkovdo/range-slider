import clearHTMLElement from './clearHTMLElement';
import activatePanel from './activate';
import { PresenterBuildParams } from '../../presenter/presenterInterfaces';
import SliderView from '../SliderView';
import notifyInputChange from './notifyInputChange';

export default class Panel {
  parent: SliderView;

  public activatePanel: (this: SliderView, params: PresenterBuildParams) => void;

  public clearHTMLElement: (id:string) => void;

  public notifyInputChange: (this: SliderView, runnersInstantPosition: number[]) => void;

  constructor(view: SliderView) {
    this.parent = view;
    this.activatePanel = activatePanel.bind(this) as () => void;
    this.clearHTMLElement = clearHTMLElement as () => void;
    this.notifyInputChange = notifyInputChange.bind(this) as () => void;
  }
}
