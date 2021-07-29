import { ActionID, ConditionID, ResistanceID, SpellID } from './util';

interface Trait {
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

class Trait {
  constructor() {
    this.id = '';
    this.basic = {
      name: '',
      version: '',
      description: ''
    };
    this.extra = {
      trait_tags: []
    };
    this.actions = [];
    this.spells = [];
    this.conditions = [];
    this.resistances = [];
  }
}

export default Trait;
export { Trait };
