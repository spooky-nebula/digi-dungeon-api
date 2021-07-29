// This is organised like this because later
// I'm thinking of adding version tracking in
// the homebrew

interface BrewID {
  id: string;
  version: Locality;
  local_id: null | string;
}

interface ClassID extends BrewID {}
interface RaceID extends BrewID {}
interface ItemID extends BrewID {}
interface SpellID extends BrewID {}
interface TraitID extends BrewID {}
interface FeatureID extends BrewID {}
interface ActionID extends BrewID {}
interface ConditionID extends BrewID {}
interface ResistanceID extends BrewID {}

declare type Locality = 'Local' | 'Server';

export {
  ClassID,
  RaceID,
  ItemID,
  SpellID,
  TraitID,
  FeatureID,
  ActionID,
  ConditionID,
  ResistanceID
};

declare type AOEType =
  | null
  | 'Cone'
  | 'Cube'
  | 'Cylinder'
  | 'Line'
  | 'Sphere'
  | 'Square';

declare type DamageType =
  | 'Acid'
  | 'Bludgening'
  | 'Cold'
  | 'Fire'
  | 'Force'
  | 'Lightning'
  | 'Necrotic'
  | 'Piercing'
  | 'Poison'
  | 'Psychic'
  | 'Slashing'
  | 'Thunder';

declare type Ability = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';

declare type Skill =
  | 'Acrobatics'
  | 'Animal Handling'
  | 'Arcana'
  | 'Athletics'
  | 'Deception'
  | 'History'
  | 'Insight'
  | 'Initimidation'
  | 'Medicine'
  | 'Nature'
  | 'Perception'
  | 'Performance'
  | 'Persuasion'
  | 'Religion'
  | 'Sleight of Hand'
  | 'Stealth'
  | 'Survival';

declare type RollLuck = null | 'None' | 'Advantage' | 'Disadvantage';
declare type Passive = 'Perception' | 'Investigation' | 'Insight';
declare type Sense = 'Hearing' | 'Taste' | 'Sight' | 'Feel' | 'Smell';

declare type ActionType =
  | 'Action'
  | 'Bonus Action'
  | 'Hour'
  | 'Minute'
  | 'No Action'
  | 'Reaction';

declare type CreatureSize =
  | 'Microscopic'
  | 'Small'
  | 'Medium'
  | 'Large'
  | 'Huge'
  | 'Massive'
  | 'Gargantuan';

export {
  AOEType,
  DamageType,
  Ability,
  Skill,
  RollLuck,
  Passive,
  Sense,
  ActionType,
  CreatureSize
};
