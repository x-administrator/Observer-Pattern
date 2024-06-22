import { Subject, User } from "src/common/types";

export default class Payment {
  readonly #paymentSubject: Subject;

  constructor(subject: Subject) {
    this.#paymentSubject = subject;
  }

  creditCard(paymentData: User) {
    console.log(`[creditCard payment] from user [${paymentData.username}]`);
    this.#paymentSubject.notify(paymentData);
  }

  loan(paymentData: User) {
    console.log(`[paymentData payment] from user [${paymentData.username}]`);
    this.#paymentSubject.notify(paymentData);
  }
}
