import { RollData, RollRequestData } from './util/dicerolling';
import DrawingLine from './map/drawingline';
import { Vector2 } from './util/structs';

interface Event {
  name: string;
  sender: string;
  timestamp: number;
}

class Event {
  constructor(name: string, sender: string, timestamp?: number) {
    this.name = name;
    this.sender = sender;
    this.timestamp = timestamp || Date.now();
  }
}

export default Event;
export { Event };

interface DiceRollRequestEvent extends Event {
  roll: RollRequestData;
}

class DiceRollRequestEvent extends Event {
  constructor(sender: string) {
    super('roll-dice-request', sender);
    this.roll = new RollRequestData();
  }
}

interface DiceRollEvent extends Event {
  roll: RollData;
}

class DiceRollEvent extends Event {
  constructor(sender: string) {
    super('roll-dice', sender);
    this.roll = new RollData();
  }
}

interface ChatMessageEvent extends Event {
  text: string;
}

class ChatMessageEvent extends Event {
  constructor(sender: string) {
    super('chat-text', sender);
    this.text = '';
  }
}

interface DrawingAddEvent extends Event {
  finishedLine: DrawingLine;
}

class DrawingAddEvent extends Event {
  constructor(sender: string) {
    super('drawing-add', sender);
    this.finishedLine = new DrawingLine();
  }
}

interface DrawingClearEvent extends Event {
  all: boolean;
}

class DrawingClearEvent extends Event {
  constructor(sender: string) {
    super('drawing-clear', sender);
    this.all = true;
  }
}

interface DrawingUndoEvent extends Event {}

class DrawingUndoEvent extends Event {
  constructor(sender: string) {
    super('drawing-undo', sender);
  }
}

interface EntityMoveEvent extends Event {
  entityID: number;
  position: Vector2;
}

class EntityMoveEvent extends Event {
  constructor(sender: string) {
    super('entity-move', sender);
    this.entityID = 0;
    this.position = { x: 0, y: 0 };
  }
}

interface EntityCreateEvent extends Event {
  entityID: number;
  newEntityData: any;
}

class EntityCreateEvent extends Event {
  constructor(sender: string) {
    super('entity-create', sender);
    this.entityID = 0;
    this.newEntityData = {};
  }
}

interface EntityModifyEvent<T> extends Event {
  entityID: number;
  newEntityData?: T;
}

class EntityModifyEvent<T> extends Event {
  constructor(sender: string) {
    super('entity-modify', sender);
    this.entityID = 0;
  }
}

interface EntityRemoveEvent extends Event {
  entityID: number;
}

class EntityRemoveEvent extends Event {
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

class EntityGrantPermissionEvent extends Event {
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

class GrantPermissionEvent extends Event {
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
  EntityModifyEvent,
  EntityCreateEvent,
  EntityRemoveEvent,
  EntityGrantPermissionEvent,
  GrantPermissionEvent
};
