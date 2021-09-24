# Events

A compilation of events between the server and the client.

The original event object is structured like the following:

```typescript
interface Event {
  name: string;
  sender: string;
  timestamp: number;
}
```

## Dice Rolling

| Interface Name       | Event Name            | Parameters                | Notes |
| -------------------- | --------------------- | ------------------------- | ----- |
| DiceRollRequestEvent | `'roll-dice-request'` | `{roll: RollRequestData}` |
| DiceRollEvent        | `'roll-dice'`         | `{roll: RollData}`        |

## Chat Related

| Interface Name   | Event Name    | Parameters       | Notes |
| ---------------- | ------------- | ---------------- | ----- |
| ChatMessageEvent | `'chat-text'` | `{text: string}` |

## World Related

@SubjectToChange // This isn't really tested or worked on so good luck

| Interface Name             | Event Name                  | Parameters                                                     | Notes |
| -------------------------- | --------------------------- | -------------------------------------------------------------- | ----- |
| DrawingAddEvent            | `'drawing-add'`             | `{finishedLine: DrawingLine}`                                  |
| DrawingUndoEvent           | `'drawing-clear'`           | `{all: boolean}`                                               |
| DrawingClearEvent          | `'drawing-undo'`            | `{}`                                                           |
| EntityMoveEvent            | `'entity-move'`             | `{entity: Entity}`                                             |
| EntityCreateEvent&lt;T&gt; | `'entity-create'`           | `{entity: Entity, newEntityData?: T}`                          |       |
| EntityModifyEvent&lt;T&gt; | `'entity-modify'`           | `{entity: Entity, newEntityData?: T}`                          |       |
| EntityRemoveEvent          | `'entity-remove'`           | `{entity: Entity}`                                             |
| EntityGrantPermissionEvent | `'entity-grant-permission'` | `{partyMemberID: number; entity: Entity; permission: string;}` |
| GrantPermissionEvent       | `'grant-permission'`        | `{partyMemberID: number; permission: string;}`                 |
