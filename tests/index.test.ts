import { expect, describe, test, jest } from "@jest/globals";
import Payment from "../src/events/payment";
import Marketing from "../src/observers/marketing";
import Shipment from "../src/observers/shipment";
import PaymentSubject from "../src/subjects/paymentSubject";

describe("Test suite for Observer Pattern", () => {
  test("#PaymentSubject notify observers", () => {
    const paymentSubject = new PaymentSubject();
    const observer = {
      update: jest.fn(),
    };

    const user = { username: "Testing Name", id: "312543", age: 34 };

    const expected = user;

    paymentSubject.subscribe(observer);
    paymentSubject.notify(user);

    expect(observer.update).toBeCalledWith(expected);
  });
  test("#PaymentSubject should not notify unsubscribed observers", () => {
    const paymentSubject = new PaymentSubject();
    const observer = {
      update: jest.fn(),
    };

    const user = { username: "Testing Name", id: "312543", age: 34 };

    paymentSubject.subscribe(observer);
    paymentSubject.unsubscribe(observer);
    paymentSubject.notify(user);

    expect(observer.update).not.toHaveBeenCalled();
  });
  test("#Payment should notify subject after a credit card transaction", () => {
    const subject = new PaymentSubject();
    const payment = new Payment(subject);

    const paymentSubjectNotifierSpy = jest.spyOn(subject, "notify");

    const user = { username: "Testing Name", id: "312543", age: 34 };

    payment.creditCard(user);

    expect(paymentSubjectNotifierSpy).toBeCalledWith(user);
  });
  test("#All should notify subscribers after a credit card transaction", () => {
    const subject = new PaymentSubject();
    const shipment = new Shipment();
    const marketing = new Marketing();

    const shipmentSpy = jest.spyOn(shipment, "update");
    const marketingSpy = jest.spyOn(marketing, "update");

    subject.subscribe(marketing);
    subject.subscribe(shipment);

    const payment = new Payment(subject);

    const user = { username: "Testing Name", id: "312543", age: 34 };

    payment.loan(user);

    expect(shipmentSpy).toBeCalledWith(user);
    expect(marketingSpy).toBeCalledWith(user);
    
  });
});
