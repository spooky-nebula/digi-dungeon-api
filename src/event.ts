import { RollData, RollRequestData } from './util/dicerolling';
import DrawingLine from './map/drawingline';
import { Vector2 } from './util/structs';
import Entity from './map/entity';

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

//#region Dice Rolling Related
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
//#endregion
//#region Chat Related
interface ChatMessageEvent extends Event {
  text: string;
}

class ChatMessageEvent extends Event {
  constructor(sender: string) {
    super('chat-text', sender);
    this.text = '';
  }
}
//#endregion
//#region Board Related
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
  entity: Entity;
  position: Vector2;
}

class EntityMoveEvent extends Event {
  constructor(sender: string) {
    super('entity-move', sender);
    this.entity = 0;
    this.position = { x: 0, y: 0 };
  }
}

interface EntityCreateEvent<T> extends Event {
  entity: Entity;
  newEntityData?: T;
}

class EntityCreateEvent<T> extends Event {
  constructor(sender: string) {
    super('entity-create', sender);
    this.entity = 0;
  }
}

interface EntityModifyEvent<T> extends Event {
  entity: Entity;
  newEntityData?: T;
}

class EntityModifyEvent<T> extends Event {
  constructor(sender: string) {
    super('entity-modify', sender);
    this.entity = 0;
  }
}

interface EntityRemoveEvent extends Event {
  entity: Entity;
}

class EntityRemoveEvent extends Event {
  constructor(sender: string) {
    super('entity-remove', sender);
    this.entity = 0;
  }
}
//#endregion
//#region Permission Related
interface EntityGrantPermissionEvent extends Event {
  partyMemberID: number;
  entity: Entity;
  permission: string;
}

class EntityGrantPermissionEvent extends Event {
  constructor(sender: string) {
    super('entity-grant-permission', sender);
    this.partyMemberID = 0;
    this.entity = 0;
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
//#endregion

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
