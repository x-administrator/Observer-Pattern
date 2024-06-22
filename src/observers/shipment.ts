import { Observer, User } from "src/common/types";

export default class Shipment implements Observer{
  update(user: User) {
    console.log(
      `[shipment] updated info of user [${user.username}] and id [${user.id}]`
    );
  }
}

