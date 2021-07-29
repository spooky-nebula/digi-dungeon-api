import { TraitID } from './util';

interface Race {
  id: string;
  basic: { name: string; description: string };
  raceTraits: TraitID[];
}

class Race {
  constructor() {
    this.id = '';
    this.basic = {
      name: '',
      description: ''
    };
    this.raceTraits = [];
  }
}

export default Race;
export { Race };

declare type BasicRace =
  | 'Dragonborn'
  | 'Dwarf'
  | 'Elf'
  | 'Gnome'
  | 'Grung'
  | 'Half-Elf'
  | 'Halfling'
  | 'Half-Orc'
  | 'Human'
  | 'Tiefling';

export { BasicRace };
