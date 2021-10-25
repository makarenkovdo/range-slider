import FieldModel from '../field-model';

const notify = function notifySubscribers(this: FieldModel): void {
  this.subscriber.recieve(this);
};

export default notify;
