# Homebrew

Ever wondered where everything about your campaigns is stored? Yeah me too, but
fret not it is in the Homebrew, the place where all races, classes, items,
spells, conditions, actions and everything in between meet.

This part of the documentation documents the extremely volatile and
undocumented Homebrew and what it contains (hehe contains hehe).

# Table of Contents

- [Homebrew](#homebrew)
- [Table of Contents](#table-of-contents)
  - [How is stuff stored](#how-is-stuff-stored)
    - [Introduction to Relational Hell](#introduction-to-relational-hell)
    - [Traits and Conditions Apply](#traits-and-conditions-apply)
    - [Actions of Dispells](#actions-of-dispells)
    - [Simpler Times, For Simpler People](#simpler-times-for-simpler-people)
  - [How is stuff retrieved](#how-is-stuff-retrieved)
  - [How is stuff modified](#how-is-stuff-modified)

## How is stuff stored

Character Sheets, _CS_ for short today, are the first object where all data can
be found from. By this, I mean that whatever else you need can be accessed
through an ID in the _CS_ being some sort of relational object.

Everything that isn't a _CS_ is accessed through a `BrewID`, structured like
this:

```typescript
interface BrewID {
  id: string; // Unique Homebrew ID of this object
  version: Locality; // Determines if it is saved on the server or locally
  local_id: null | string; // The unique local id
}
```

And these IDs make up the important stuff on the _CS_ while keeping it smaller
to save on the server/clients. The clients then have to ask the server for the
other information linked to the _CS_ using these `BrewID`s.

With that in mind, let's look at the data in a _CS_ step by step:

### Introduction to Relational Hell

This data pretains to the Character's most important details to assign traits
and features, let's take a peek:

```typescript
interface Sheet {
  characterName: string;
  id: string;
  version: string;
  info: {
    class: ClassID;
    background: string;
    race: RaceID;
    alignment: string;
    experiencePoints: number;
  };
  // ...
```

The `ClassID` and `RaceID` might seem pretty inocent there, but they decide
what the character can actually do. These to link to the `Class` and `Race`
(which are pretty similar) which have their respective Features and Traits.

```typescript
// race.ts
interface Race {
  id: string;
  basic: { name: string; description: string };
  raceTraits: TraitID[];
}
// class.ts
interface Class {
  id: string;
  basic: { name: string; description: string };
  classFeatures: FeatureID[];
}
```

These `Trait` and `Feature` IDs then link to the respective traits and features
of these races and classes. Here is a simplified structure that the `Trait` and
`Feature` structures both implement:

```typescript
interface CharacterDescriptor {
  id: string;
  basic: {
    name: string;
    version: string;
    description: string;
  };
  extra: {
    trait_tags: string[];
  };
  actions: ActionID[];
  spells: SpellID[];
  conditions: ConditionID[];
  resistances: ResistanceID[];
}
```

From here the _CS_ can actually start getting populated with its various
stats.

Possible data structures are described by the type `HomebrewElement`:

```typescript
declare type HomebrewElement =
  | Action
  | Class
  | Condition
  | Feature
  | Race
  | Item
  | Resistance
  | Trait
  | Spell;
```

Now here is where we get knee deep into relational data objects. There's no
going back after seeing this. If you are not prepared don't read any longer.

### Traits and Conditions Apply

![](/docs/assets/BrewIDTypes.png)

These are all the Brew ID types. Some of these add actions to your _CS_, or
maybe they modify your _CS_ ability scores, even add resistances or spells.

But they don't actually add them there, the client just saves all those into
its local cache and presents them to you in your character sheet for the sake
of usability.

As we were discussing before, the first stuff processed and 'added' to your
_CS_ are the Class Features and Race Traits. These have a comprehensive list
of what your character can do... but also what how powerful or weak they can do
something. Do you see the field `CharacterDescriptor.conditions`? Something
very special happens here.

Just like conditions in **DnD**, they change how your character can act. But
here they also change what ability scores you have, what speed your character
can move, their proficiencies, how much damage they can endure. I would recomend
a light read of the `Effect` type in
[condition.ts](/src/sheets/fifthEdition/condition.ts) and don't forget to come
back, don't worry this text won't disappear yet.

These conditions will apply to your character. So imagine you have a condition
that apply the following effect:

```typescript
const Effect = { name: 'Speed Increase'; param: 30 }
```

This will increase whatever value is on the _CS_\* by `30` in the calculated
sheet but won't actually modify the value on the sheet. This way the base
character sheet can be kept as the Base value of your character with all these
conditions modifying the final calculated sheet.

\*`Sheet.basic.speed` is where that base value would be btw.

Now that you understand the Traits and Conditions, lets talk about actions and
spells, which also come from Traits.

### Actions of Dispells

`Action`s determine what your character can do in their turn. These normally
describe combat actions taking up an `ActionType` (you should read
[**util.ts**](/src/sheets/fifthEdition/util.ts) if you don't know what the cool
kids are chatting about) and have a couple of properties used by the client to
show the user targeting and also simplify calculations for the Dungeon Master.

There is also `BasicActions`, which only describe basic tasks the character can
do like `'use_an_object'` or `'hide'` but these only have descriptions.

`Spell`s are on a separate category of actions and have more properties to
describe the spell and its cost. For example, in the `Spell` structure, the
duration of the spell is described in the following structure:

```typescript
// spell.ts
interface Spell {
  // ...
  basic: {
    // ...
    durationType: SpellDurationType;
    duration: number;
    durationUnit: SpellDurationUnit;
    // ...
  };
  // ...
}

// ...

declare type SpellDurationType =
  | 'Concentration'
  | 'Instantaneous'
  | 'Special'
  | 'Time'
  | 'Until Dispelled'
  | 'Triggered';

declare type SpellDurationUnit =
  | 'Round'
  | 'Seconds'
  | 'Minute'
  | 'Hour'
  | 'Day';
```

> Sorry about the block of code. - Gandhi

For determining if the spell has a duration, the first variable,
`durationType`, must be `'Time'`. Only then do the next two variables matter
with how much of time that spell will last and what unit the creator intended
to be used.

Alright good luck understanding the API have fun.

### Simpler Times, For Simpler People

If you don't want to deal with relational hell, you can just use the
`BasicSheet` structure made of strings and numbers.

## How is stuff retrieved

@NotImplemented // Wait for v0.2.0

This section will explain how the homebrew responds with data.

## How is stuff modified

@NotImplemented // Wait for v0.2.0

Supposedly explains how stuff is modified in the homebrew, I don't remeber who
asked.
