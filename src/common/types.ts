export  type User = {
  id: string;
  username: string;
  age: number;
};

export type Observer = {
  update(user: User): void;
}

export type Subject = {
  notify(data: User): void
  subscribe(observable: Observer): void
  unsubscribe(observable: Observer): void
}