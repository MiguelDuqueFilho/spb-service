import { Injectable } from '@nestjs/common';
import { MessageReceiveRepository } from '../repositories/message-receive-repository';

Injectable();
export class ReceiveMessage {
  constructor(private messageReceiveRepository: MessageReceiveRepository) {}

  // async execute(request: ReceiveMessageRequest) {
  async execute() {
    console.log(`receive Message`);
  }
}
