# Digi Dungeon Documentation

This is the very extense Digi Dungeon API. Here you can find descriptions for
the various classes and interfaces that don't even have any coments in code.

Of course, using this API, you can make your own Third-Party Server or Client
if you don't like me or me.

With that out of the way let's get to the good stuff.

# Table of Contents

- [Digi Dungeon Documentation](#digi-dungeon-documentation)
- [Table of Contents](#table-of-contents)
- [Naming Conventions](#naming-conventions)
- [Shard Data](#shard-data)
- [Authentication](#authentication)
  - [Login](#login)
  - [Handshake](#handshake)
- [Homebrew](#homebrew)

# Naming Conventions

These are the naming conventions used in the documentation. For code naming
conventions, follow [**here**](/CONTRIBUITING.md).

- _italics_
  - Contextual Terminology. The author doesn't want to repeat a word so they
    shortened it for fluency.
- **bold**
  - Links or references to external web pages.
- @Decorator
  - Current state of a function, class or submodule if relevant.
- @Decorator // Comment following
  - Any message relevant to the state defined by the decorator.
- ```
    code blocks
  ```
  - Exerts of code to explain various parts of the documentation. Statistically,
    an example can be worth 1000 hours of debugging.
- `inline code`
  - Variables lol
- > Quotes
  - Someone said something on the internet, how original **@twitter**.

# Event API

Events are called when clients want to tell eachother what the hell they need
to cooperate in epic quests. These are sent through a **socket.io** socket which I
will just refer as _sock_. Event structure follows this simple interface
(extended for different events):

```typescript
interface Event {
  name: string;
  sender: string;
}
```

In the Official Digi-Dungeon Server and Client, the emitted events on the
_sock_ all have the message name as `'board-event'` and are relayed between
clients, like a P2P system (more-a-less). The Clients and Server _socks_ are all
listening for the `'board-event'` and do extra processing depending on the
`Event.name`. For example, the `RollRequestEvent` requests the server for a
pseudo-random roll, lets look at its structure:

```ts
// event.ts
interface DiceRollRequestEvent extends Event {
  name: string; // From Event
  sender: string; // From Event
  roll: RollRequestData;
}

interface DiceRollEvent extends Event {
  name: string; // From Event
  sender: string; // From Event
  roll: RollData;
}

// dicerolling.ts
interface RollRequestData {
  dieQuantity: number;
  modifier: number;
  dieType: number;
}

interface RollData extends RollRequestData {
  dieQuantity: number; // From RollRequestData
  modifier: number; // From RollRequestData
  dieType: number; // From RollRequestData
  rolls: number[];
  result: number;
}
```

Using the `DiceRollRequestEvent.roll`, the server rolls some random dice, that
will most likely land a Nat 1, and creates a `DiceRollEvent` (transfering the
sender to the new event). Finally the server sends this resulting event to all
the _socks_ in the same room and saves the event to memory.

A comprehensive list of all events can be found [here](/docs/events.md), as
well as what they entail.

# Shard Data

Shards are instances of a Digi-Dungeon session, they include important data for
the clients to initialize the view, preload events and load users. They follow
a simple structure:

```typescript
interface Shard {
  id: string; // For internal server management
  partyList: PartyMember[]; // List of users connected
  map: Board; // Map Data
  gamelog: Event[]; // All server recorded events
  sheetIds: string[]; // Used to get a character sheet from the homebrew
}
```

The clients can request this data with the `'handshake'` event on their _sock_.
The server will respond with a `'handshake-ack'` event containing the message
following this interface:

```typescript
interface SimpleShardData {
  id: string;
  partyList: PartyMember[];
  map: Board;
  gamelog: Event[];
  sheetIds: string[];
}
```

The data is called `SimpleShardData` because I expect in the future nested
information will be stored on the shard and we will need a simple version for
less bandwidth.

The processing of this data can be found on the (non-existent) documentation
for **digi-dungeon-client**.

Information about the map data can be found in
[the board documentation](board.md).

# Authentication

## Login

@SubjectToChange // Security is always evolving

For the client to do any authentication work on the server, they need to follow
the next interfaces in the request body:

```typescript
interface UserRegisterData {...} // POST /register
interface UserLoginData {...} // POST /login
interface UserLogoutData {...} // POST /logout
```

The information about these structures can be found in
[**userdata.ts**](/src/auth/userdata.ts)

Only then will the server answer with a success (if the transaction was
successful) along with a token (or a message on why the transaction was not a
success). This response is structured like the next code block.

```typescript
interface AuthRequestResponse {
  success: boolean;
  token?: string;
}
```

In the official server the passwords are salted and hashed so no-one keeps your
password ever.

## Handshake

@SubjectToChange // Security is always evolving

When the client requests the shard data from the server during the _sock_
`'handshake'`, it is required that the data in the `'handshake'` message follows
this structure:

```typescript
interface HandshakeData {
  token: string;
  shardID: string;
}
```

The server needs this information to check if the user is logged in and to find
the shard the user wants to connect to (for epic adventures of course). This
method might not be the best but it's pretty simple for now. If the token
doesn't match with any logged in user, the connection is severed (I'm a aware
of brute force attacks that could happen but at this point I don't think
there's that much value on a digi-dungeon account).

If all the data matches, the server then sends a `'handshake-ack'` on the
_sock_ with the message structure:

```typescript
interface HandshakeResponseData {
  shardData: SimpleShardData;
}
```

The client can now catch up to the other clients using the data sent.

# Homebrew

@NotImplemented // Currently being implemented, await v0.2.0

Homebrew is a special place on the server where character sheets, items,
spells, actions, classes, races, campaigns are stored. These are all in a sort
of relational database to link them all to character sheets. Only the base
fifth edition data is included on the database by default. The rest of the
items, classes, actions, spells, races, etc... are produced by users.

To know how each element is stored on the homebrew, check
[the bible](/docs/homebrew.md) lol.
