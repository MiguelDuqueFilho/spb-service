export class MessagReceiveNotFound extends Error {
  constructor() {
    super('message received not found.');
  }
}
