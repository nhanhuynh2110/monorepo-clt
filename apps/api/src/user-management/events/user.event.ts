import { Injectable } from '@nestjs/common';
import {
  EventService,
  InjectEventService,
  EmitEvent,
  OnEvent,
} from '@pkg/event';

@Injectable()
export class SomeService {
  constructor(
    @InjectEventService() private readonly eventService: EventService,
  ) {}

  @EmitEvent('some.event')
  someMethod() {
    console.log('Method executed and event emitted');
  }

  @OnEvent('some.event')
  handleSomeEvent(payload: any) {
    console.log('Event received:', payload);
  }
}
