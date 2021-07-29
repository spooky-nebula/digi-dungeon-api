import { ActionID, ConditionID, ResistanceID, SpellID } from './util';

interface Feature {
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

class Feature {
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

export default Feature;
export { Feature };
