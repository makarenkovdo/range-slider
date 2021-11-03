import SliderView from '../SliderView';
import handleClickUtility from './handleClick/handleClickUtility';

const handleClick = function activateOnClickListenerAndNotify(this: SliderView): void {
  this.$field.on('click', this, handleClick);
  $('.js-scale-lines').on('click', this, handleClickUtility);
  $('.js-scale-numbers').on('click', this, handleClickUtility);
};

export default handleClick;
