import SliderView from '../SliderView';
import handleClick from './activateOnClickListener/handleClick';

const activateOnClickListener = function activateOnClickListenerAndNotify(
  thisView: SliderView,
): void {
  thisView.$field.on('click', thisView, handleClick);
};

export default activateOnClickListener;
