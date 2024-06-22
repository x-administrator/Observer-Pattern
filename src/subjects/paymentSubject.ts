import { Observer, User } from "src/common/types";

export default class PaymentSubject {
  #observers = new Set();

  notify(user: User) {
    this.#observers.forEach((observer: Observer) => observer.update(user));
  }

  subscribe(observable: Observer) {
    this.#observers.add(observable);
  }

  unsubscribe(observable: Observer) {
    this.#observers.delete(observable);
  }
}

