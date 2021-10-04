import { Publihser } from './base-publihser';
import { TicketCreatedEvent } from './ticket-created-event';
import { Subjects } from './subjects';

export class TicketCreatedPublisher extends Publihser<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
