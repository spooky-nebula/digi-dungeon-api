import { FeatureID } from './util';

interface Class {
  id: string;
  basic: { name: string; description: string };
  classFeatures: FeatureID[];
}

class Class {
  constructor() {
    this.id = '';
    this.basic = {
      name: '',
      description: ''
    };
    this.classFeatures = [];
  }
}

export default Class;
export { Class };

declare type BasicClass =
  | 'Barbarian'
  | 'Bard'
  | 'Cleric'
  | 'Druid'
  | 'Fighter'
  | 'Monk'
  | 'Paladin'
  | 'Ranger'
  | 'Rogue'
  | 'Sorcerer'
  | 'Warlock'
  | 'Wizard';

export { BasicClass };
