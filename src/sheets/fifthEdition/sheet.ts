import {
  ItemID,
  SpellID,
  TraitID,
  ActionID,
  FeatureID,
  Ability,
  Skill,
  ClassID,
  RaceID,
  ConditionID,
  ResistanceID
} from './util';

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
  basic: {
    armourClass: number;
    initiative: number;
    speed: number;
    maxhp: number;
    hp: number;
    extrahp: number;
    inspiration: boolean;
    proficiencyBonus: number;
  };
  passives: {
    perception: number;
    investigation: number;
    insight: number;
  };
  ability: Map<Ability, AbilityScore>;
  saving: Map<Ability, SavingScore>;
  skill: Map<Skill, SkillScore>;
  description: {
    personalityTraits: string;
    ideals: string;
    bonds: string;
    flaws: string;
    appearance: string;
  };
  notes: {
    backstory: string[];
    allies: string[];
    organizations: string[];
    enemies: string[];
  };
  extras: string[];
  inventory: ItemID[];
  spells: SpellID[];
  traits: TraitID[];
  features: FeatureID[];
  actions: ActionID[];
  conditions: ConditionID[];
  resistances: ResistanceID[];
}

class Sheet {
  constructor() {
    this.characterName = '';
    this.version = '';
    this.info = {
      class: { id: '', version: 'Local', local_id: '' },
      background: '',
      race: { id: '', version: 'Local', local_id: '' },
      alignment: 'Neutral',
      experiencePoints: 0
    };
    this.basic = {
      armourClass: 0,
      initiative: 0,
      speed: 0,
      maxhp: 0,
      hp: 0,
      extrahp: 0,
      inspiration: false,
      proficiencyBonus: 0
    };
    this.passives = {
      perception: 0,
      investigation: 0,
      insight: 0
    };
    this.ability = new Map<Ability, AbilityScore>();
    this.saving = new Map<Ability, SavingScore>();
    this.skill = new Map<Skill, SkillScore>();
    this.description = {
      personalityTraits: '',
      ideals: '',
      bonds: '',
      flaws: '',
      appearance: ''
    };
    this.notes = {
      backstory: [],
      allies: [],
      organizations: [],
      enemies: []
    };
    this.extras = [];
    this.inventory = [];
    this.spells = [];
    this.traits = [];
    this.features = [];
    this.conditions = [];
    this.resistances = [];
  }
}

export default Sheet;
export { Sheet };

interface AbilityScore {
  value: number;
  modifier: number;
}
interface SkillScore {
  proficiency: number;
  modifier: number;
}
interface SavingScore {
  proficiency: number;
  modifier: number;
}

export { AbilityScore, SkillScore, SavingScore };
