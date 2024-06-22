import Payment from "./events/payment";
import Marketing from "./observers/marketing";
import Shipment from "./observers/shipment";
import PaymentSubject from "./subjects/paymentSubject";

const paymentSubject = new PaymentSubject();

const marketing = new Marketing();

paymentSubject.subscribe(marketing);
paymentSubject.subscribe(new Shipment());

const payment = new Payment(paymentSubject);

payment.creditCard({ username: "Egor Yakimov", id: "2n0d380-bao94", age: 20 });

paymentSubject.unsubscribe(marketing);

payment.loan({ username: "Emmo Script", id: "sm38n", age: 32 })