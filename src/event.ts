import { RollData, RollRequestData } from './util/dicerolling';
import DrawingLine from './map/drawingline';

interface Event {
  name: string;
  sender: string;
}

class Event implements Event {
  name: string;
  sender: string;

  constructor(name: string, sender: string) {
    this.name = name;
    this.sender = sender;
  }
}

export default Event;

interface DiceRollRequestEvent extends Event {
  roll: RollRequestData;
}

class DiceRollRequestEvent extends Event implements DiceRollRequestEvent {
  roll: RollRequestData;

  constructor(sender: string) {
    super('roll-dice-request', sender);
    this.roll = new RollRequestData();
  }
}

interface DiceRollEvent extends Event {
  roll: RollData;
}

class DiceRollEvent extends Event implements DiceRollEvent {
  roll: RollData;

  constructor(sender: string) {
    super('roll-dice', sender);
    this.roll = new RollData();
  }
}

interface ChatMessageEvent extends Event {
  text: string;
}

class ChatMessageEvent extends Event implements ChatMessageEvent {
  text: string;

  constructor(sender: string) {
    super('chat-text', sender);
    this.text = '';
  }
}

interface DrawingAddEvent extends Event {
  finishedLine: DrawingLine;
}

class DrawingAddEvent extends Event implements DrawingAddEvent {
  finishedLine: DrawingLine;

  constructor(sender: string) {
    super('drawing-add', sender);
    this.finishedLine = new DrawingLine();
  }
}

interface DrawingClearEvent extends Event {
  all: boolean;
}

class DrawingClearEvent extends Event implements DrawingClearEvent {
  all: boolean;

  constructor(sender: string) {
    super('drawing-clear', sender);
    this.all = true;
  }
}

interface DrawingUndoEvent extends Event {}

class DrawingUndoEvent extends Event implements DrawingUndoEvent {
  constructor(sender: string) {
    super('drawing-undo', sender);
  }
}

interface EntityMoveEvent extends Event {
  entityID: number;
}

class EntityMoveEvent extends Event implements EntityMoveEvent {
  entityID: number;

  constructor(sender: string) {
    super('entity-move', sender);
    this.entityID = 0;
  }
}

interface EntityCreateEvent extends Event {}

class EntityCreateEvent extends Event implements EntityCreateEvent {
  constructor(sender: string) {
    super('entity-create', sender);
  }
}

interface EntityRemoveEvent extends Event {
  entityID: number;
}

class EntityRemoveEvent extends Event implements EntityRemoveEvent {
  entityID: number;

  constructor(sender: string) {
    super('entity-remove', sender);
    this.entityID = 0;
  }
}

interface EntityGrantPermissionEvent extends Event {
  partyMemberID: number;
  entityID: number;
  permission: string;
}

class EntityGrantPermissionEvent
  extends Event
  implements EntityGrantPermissionEvent
{
  partyMemberID: number;
  entityID: number;
  permission: string;

  constructor(sender: string) {
    super('entity-grant-permission', sender);
    this.partyMemberID = 0;
    this.entityID = 0;
    this.permission = 'm';
  }
}

interface GrantPermissionEvent extends Event {
  partyMemberID: number;
  permission: string;
}

class GrantPermissionEvent extends Event implements GrantPermissionEvent {
  partyMemberID: number;
  permission: string;

  constructor(sender: string) {
    super('grant-permission', sender);
    this.partyMemberID = 0;
    this.permission = 'c';
  }
}

export {
  DiceRollRequestEvent,
  DiceRollEvent,
  ChatMessageEvent,
  DrawingAddEvent,
  DrawingClearEvent,
  DrawingUndoEvent,
  EntityMoveEvent,
  EntityCreateEvent,
  EntityRemoveEvent,
  EntityGrantPermissionEvent,
  GrantPermissionEvent
};
