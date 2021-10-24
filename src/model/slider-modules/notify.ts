const notify = function notifySubscribers() {
  this.subscriber.recieve(this);
};

export default notify;
