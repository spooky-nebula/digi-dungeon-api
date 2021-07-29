import { DamageType } from './util';

interface Resistance {
  id: string;
  basic: {
    name: string;
    description: string;
    damageType: DamageType;
    resistanceType: ResistanceType;
  };
}

class Resistance {
  constructor() {
    (this.id = ''),
      (this.basic = {
        name: '',
        description: '',
        damageType: 'Slashing',
        resistanceType: 'Resistance'
      });
  }
}

export default Resistance;
export { Resistance };

declare type ResistanceType = 'Resistance' | 'Immunity' | 'Vunerability';
