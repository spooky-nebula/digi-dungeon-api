import { Ability, ActionType, AOEType, DamageType } from './util';

interface Action {
  id: string;
  basic: {
    name: string;
    version: string;
    description: string;
    actionType: ActionType;
    actionTime: number;
  };
  extra: {
    shortRange: number;
    maxRange: number;
    aoeType: AOEType;
    aoeSize: number;
    damageType: DamageType;
    damage: number;
    scaleScore: null | Ability;
    dcModifier: number;
    proficient: boolean;
  };
}

class Action {
  constructor() {
    this.id = '';
    this.basic = {
      name: '',
      version: '',
      description: '',
      actionType: 'Action',
      actionTime: 1
    };
    this.extra = {
      shortRange: 5,
      maxRange: 5,
      aoeType: null,
      aoeSize: 0,
      damageType: 'Slashing',
      damage: 0,
      scaleScore: null,
      dcModifier: 0,
      proficient: false
    };
  }
}

export default Action;
export { Action };

interface BasicAction {
  id: string;
  name: string;
  version: string;
  description: string;
}

class BasicAction {
  constructor() {
    this.id = '';
    this.name = '';
    this.version = '';
    this.description = '';
  }
}

const BasicActions = [
  {
    id: '_attack',
    name: 'Attack',
    version: '1.0.0',
    description:
      'You can make one melee or ranged attack. Some features may allow you to make more than one attack with this action.'
  },
  {
    id: '_cast_a_spell',
    name: 'Cast a Spell',
    version: '1.0.0',
    description:
      'You can cast any spell that you are capable of casting that has a listed casting time of one action.*'
  },
  {
    id: '_dash',
    name: 'Dash',
    version: '1.0.0',
    description:
      'You spend the entire round moving. This allows you to move twice as far this round. It is effectively a double move action.'
  },
  {
    id: '_disengage',
    name: 'Disengage',
    version: '1.0.0',
    description:
      'If you start the round within 5 feet of opponent you can see, move away from him without provoking an opportunity attack.'
  },
  {
    id: '_dodge',
    name: 'Dodge',
    version: '1.0.0',
    description:
      'Until start of your next turn. You have Advantage on DEX saving throws and if you can see the attacker attacks against you have Disadvantage'
  },
  {
    id: '_help',
    name: 'Help',
    version: '1.0.0',
    description:
      'Help ally attack opponent within 5 feet of you. His first attack roll is made with Advantage. Or you can help him (has Advantage) with any other task.'
  },
  {
    id: '_use_an_object',
    name: 'Use an Object',
    version: '1.0.0',
    description:
      'An object may require an action for you to use it, or you may need to use this action to interact with more than one object in a round.'
  },
  {
    id: '_hide',
    name: 'Hide',
    version: '1.0.0',
    description:
      'f you can’t be seen, make a DEX (Stealth) check to hide. Your check must beat your opponents WIS (Perception) check.'
  },
  {
    id: '_search',
    name: 'Search',
    version: '1.0.0',
    description:
      'Use your action to attempt to find something. The DM might require you to make a Wisdom check or an Intelligence check.'
  },
  {
    id: '_readied_action',
    name: 'Readied Action',
    version: '1.0.0',
    description:
      'Instead of an action during your turn, wait for some specific event. Then take your action as a reaction. You can still move up to your speed, but you can take no other action this round.\n1. Must say what the triggering event will be. Can be anything you think might happen that you can observe. If the event occurs before the start of your turn on the next round you can perform your readied action at that time.\n2. Must say what action you will take. This can be any of the combat actions.(Note that this action will be a reaction and you can only have one reaction per round. This means that if you take another reaction, you lose your readied action. Conversely, if you use your readied action you can have no other reactions this round.)\n- If the triggering event occurs, you can choose to not take your readied action.\n- Dash: You can move up to your speed.\n- Cast a Spell: Cast the spell during your turn\nBut hold off on releasing the energy of the spell until the triggering event. You must concentrate to hold the spell’s energy. If something breaks your concentration, the spell is lost. If the triggering event doesn’t occur this round, you can continue to hold the spell with continued concentration into the following round, or you can cast it as an action on your next turn, or you can lose it.'
  },
  {
    id: '_improvised_action',
    name: 'Improvised Action',
    version: '1.0.0',
    description:
      'Anything not covered by any of the above actions.\n1. You must explain the improvised action to the DM. The DM may rule that what you want to do will require more than one round, or that it is simply impossible. The DM may ask you to be more specific regarding the action you want to take and how the action will achieve the results you want.\n2. The improvised action can also include all or part of your move. Successfully jumping on a creature will give you advantage on the attack roll. A failed attempt results in your move stopping at the point where the attack takes place and may grant your opponent Adv on his next attack against you.\n3. To perform the improvised action the DM will normally have you make an ability check. The DM will assign an appropriate difficulty class and will explain possible consequences if the attempted action fails. For example, if you attempt to jump off of the balcony onto the monster in the center of the room and miss you may end up prone.\n'
  }
] as BasicAction[];

export { BasicAction, BasicActions };
