import { Class } from './class';
import { ActionID, AOEType, ConditionID, SpellID } from './util';

interface Spell {
  id: string;
  basic: {
    name: string;
    version: string;
    spellLevel: SpellLevel;
    spellSchool: SpellSchool;
    castingTime: number;
    castingTimeUnit: CastingTimeUnit;
    reactionCastDescription: null | string;
    components: SpellComponent;
    spellRangeType: SpellRangeType;
    spellRange: number;
    durationType: SpellDurationType;
    duration: number;
    durationUnit: SpellDurationUnit;
    description: string;
    availableForClasses: Class[];
  };
  extra: {
    aoeType: AOEType;
    aoeSize: number;
    partOfAWeaponAttack: boolean;
    partOfAWeaponAttackType: null | 'Melee' | 'Ranged';
    canBeSaved: boolean;
    saveType: null | 'CHA' | 'CON' | 'DEX' | 'INT' | 'STR' | 'WIS';
    effectOnMiss: null | string;
    effectOnSave: null | string;
    effectOnSaveFail: null | string;
    avatar_path: null | string;
    large_avatar_path: null | string;
    spell_tags: string[];
  };
  actions: ActionID[];
  conditions: ConditionID[];
  spell_at_higher_levels: Map<number, SpellID>;
}

class Spell {
  constructor() {
    this.id = '';
    this.basic = {
      name: '',
      version: '',
      spellLevel: 'Cantrip',
      spellSchool: 'Enchantment',
      castingTime: 0,
      castingTimeUnit: 'No Action',
      reactionCastDescription: null,
      components: 'v',
      spellRangeType: 'Self',
      spellRange: 0,
      duration: 0,
      durationType: 'Instantaneous',
      durationUnit: 'Round',
      description: '',
      availableForClasses: []
    };
    this.extra = {
      aoeType: null,
      aoeSize: 0,
      partOfAWeaponAttack: false,
      partOfAWeaponAttackType: null,
      canBeSaved: false,
      saveType: null,
      effectOnMiss: null,
      effectOnSave: null,
      effectOnSaveFail: null,
      avatar_path: null,
      large_avatar_path: null,
      spell_tags: []
    };
    this.actions = [];
    this.conditions = [];
    this.spell_at_higher_levels = new Map<number, SpellID>();
  }
}

export default Spell;
export { Spell };

declare type SpellLevel =
  | 'Cantrip'
  | '1st'
  | '2nd'
  | '3rd'
  | '4th'
  | '5th'
  | '6th'
  | '7th';

declare type SpellSchool =
  | null
  | 'Abjuration'
  | 'Conjuration'
  | 'Divination'
  | 'Enchantment'
  | 'Evocation'
  | 'Illusion'
  | 'Necromancy'
  | 'Transmutaion';

declare type SpellComponent = '' | 'v' | 's' | 'm' | 'vs' | 'vm' | 'sm' | 'vsm';

declare type SpellRangeType =
  | 'Self'
  | 'Touch'
  | 'Ranged'
  | 'Sight'
  | 'Unlimited';

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

declare type CastingTimeUnit =
  | 'Action'
  | 'Bonus Action'
  | 'Hour'
  | 'Minute'
  | 'No Action'
  | 'Reaction';
//| "Special"
