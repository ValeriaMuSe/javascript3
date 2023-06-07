class Publisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  publish(data) {
    this.subscribers.forEach(subscriber => subscriber(data));
  }
}

export { Publisher }