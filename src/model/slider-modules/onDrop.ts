import activateOnDropListener from './onDrop/onDropUtility';

const onDrop = ($field: JQuery<HTMLElement>): void => {
  activateOnDropListener($field);
};
export default onDrop;
