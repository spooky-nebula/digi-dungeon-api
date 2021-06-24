import { RollData } from "./util/diceRolling";
import DrawingLine from "./map/drawingLine";

export default class Event {
    name: string;
    sender: string;

    constructor(name: string, sender: string) {
        this.name = name;
        this.sender = sender;
    }
}

export class DiceRollRequestEvent extends Event {
    constructor(sender: string) {
        super("roll-dice-request", sender);
    }
}

export class DiceRollEvent extends Event {
    roll: RollData;

    constructor(sender: string) {
        super("roll-dice", sender);
        this.roll = new RollData();
    }
}

export class ChatMessageEvent extends Event {
    text: string;

    constructor(sender: string) {
        super("chat-text", sender);
        this.text = "";
    }
}

export class DrawingAddEvent extends Event {
    finishedLine: DrawingLine;

    constructor(sender: string) {
        super("drawing-add", sender);
        this.finishedLine = new DrawingLine();
    }
}

export class DrawingClearEvent extends Event {
    all: boolean;

    constructor(sender: string) {
        super("drawing-clear", sender);
        this.all = true;
    }
}

export class DrawingUndoEvent extends Event {
    constructor(sender: string) {
        super("drawing-undo", sender);
    }
}

export class EntityMoveEvent extends Event {
    entityID: number;

    constructor(sender: string) {
        super("entity-move", sender);
        this.entityID = 0;
    }
}

export class EntityCreateEvent extends Event {
    constructor(sender: string) {
        super("entity-create", sender);
    }
}

export class EntityRemoveEvent extends Event {
    entityID: number;

    constructor(sender: string) {
        super("entity-remove", sender);
        this.entityID = 0;
    }
}

export class EntityGrantPremissionEvent extends Event {
    partyMemberID: number;
    entityID: number;
    permission: string;

    constructor(sender: string) {
        super("entity-grant-permission", sender);
        this.partyMemberID = 0;
        this.entityID = 0;
        this.permission = "m";
    }
}

export class GrantPremissionEvent extends Event {
    partyMemberID: number;
    permission: string;

    constructor(sender: string) {
        super("grant-permission", sender);
        this.partyMemberID = 0;
        this.permission = "c";
    }
}