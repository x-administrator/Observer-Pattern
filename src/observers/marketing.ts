import { Observer, User } from "src/common/types";

export default class Marketing implements Observer{
  update(user: User) {
    console.log(
      `[marketing] updated info of user [${user.username}] and id [${user.id}]`
    );
  }
}
