import { BaseArmour, BaseMagicItem, WeaponProperties } from './item';
import {
  Ability,
  ActionType,
  CreatureSize,
  DamageType,
  RollLuck,
  Sense
} from './util';

interface Condition {
  id: string;
  basic: {
    name: string;
    version: string;
    description: string;
    effectDescriptions: string[];
    // Complications are for the clients to calculate stuff I guess
    complications: Complication[];
  };
}

class Condition {
  constructor() {
    this.id = '';
    this.basic = {
      name: '',
      version: '',
      description: '',
      effectDescriptions: [],
      complications: []
    };
  }
}

export default Condition;
export { Condition };

interface Complication {
  id: string;
  basic: {
    name: string;
    effect: Effect;
    originEntityID: string;
  };
}

class Complication {
  constructor() {
    (this.id = ''),
      (this.basic = {
        name: '',
        effect: { name: 'Attack Roll', param: 'Advantage' },
        originEntityID: ''
      });
  }
}

// WARN: This is weird
// Why did I do it like this?
// Maybe I don't know how to do this?
// Maybe one day I'll become good
// Maybe I need to think more about my actions
// Is this ok?
// Is this really ok?
// This is fine
// I can live with this
declare type Effect =
  | { name: 'Attack Roll'; param: RollLuck }
  | { name: 'Ability Check'; param: RollLuck }
  | { name: "Can't Harm Origin"; param: null }
  | { name: "Can't Move to Origin"; param: null }
  | { name: "Can't"; param: Sense }
  | { name: 'No'; param: ActionType }
  | { name: "Can't be"; param: Sense }
  | { name: 'Automatically fails %param save'; param: Ability }
  | { name: 'Automatically fails %param check'; param: Ability }
  | { name: 'Resistance to All'; param: null }
  | { name: 'Resistance to'; param: DamageType }
  | { name: 'Immune to All'; param: null }
  | { name: 'Immune to'; param: DamageType }
  | { name: 'Vunerable to All'; param: null }
  | { name: 'Vunerable to'; param: DamageType }
  | {
      name: 'Ability Score Increase';
      param: { ability: Ability; score: number };
    }
  | { name: 'Armour Class Increase'; param: number }
  | { name: 'Initiative Increase'; param: number }
  | { name: 'Speed Increase'; param: number }
  | { name: 'Sense Increase'; param: { sense: Sense; score: number } }
  | { name: 'Can See in the Dark'; param: null }
  | { name: 'Size Modifier'; param: CreatureSize }
  | { name: 'Hitpoints Static'; param: number }
  | { name: 'Extra Hitpoints Static'; param: number }
  | {
      name: 'Hitpoints Rolled';
      param: { dieQuantity: number; dieType: number; dieModifier: number };
    }
  | {
      name: 'Extra Hitpoints Rolled';
      param: { dieQuantity: number; dieType: number; dieModifier: number };
    }
  | { name: 'Can Cast Spells'; param: null }
  | {
      name: 'Proficient with';
      param: BaseArmour | WeaponProperties | BaseMagicItem;
    }
  | { name: 'Proficiency Bonus'; param: number }
  | { name: 'Inspired'; param: boolean };

export { Complication, Effect };
