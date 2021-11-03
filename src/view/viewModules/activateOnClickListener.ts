import SliderView from '../SliderView';
import handleClick from './activateOnClickListener/handleClick';

const activateOnClickListener = function activateOnClickListenerAndNotify(this: SliderView): void {
  this.$field.on('click', this, handleClick);
  $('.js-scale-lines').on('click', this, handleClick);
  $('.js-scale-numbers').on('click', this, handleClick);
};

export default activateOnClickListener;
