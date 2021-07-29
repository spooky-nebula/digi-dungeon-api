import { ActionID, ConditionID, ResistanceID, SpellID } from './util';

interface Item {
  id: string;
  basic: {
    name: string;
    version: string;
    rarity: ItemRarity;
    baseType: ItemTypes;
    magicType: BaseMagicItem;
    baseArmour: BaseArmour;
    dexBonus: DexBonus;
    strengthRequirement: number;
    stealthCheck: StealthCheck;
    baseWeapon: BaseWeapon;
    properties: WeaponProperties[];
    attunementDescription: string;
    attunementRequired: boolean;
    description: string;
  };
  extra: {
    hasCharges: boolean;
    chargeCapacity: null | number;
    chargeReset: null | string;
    chargeResetDescription: null | string;
    chargeWeight: null | number;
    weight: number;
    avatar_path: null | string;
    large_avatar_path: null | string;
    magic_item_tags: string[];
  };
  actions: ActionID[];
  conditions: ConditionID[];
  resistances: ResistanceID[];
  spells: SpellID[];
}

class Item implements Item {
  constructor() {
    this.id = '';
    this.basic = {
      name: '',
      version: '',
      rarity: 'Common',
      baseType: 'Weapon',
      magicType: null,
      baseArmour: null,
      dexBonus: null,
      strengthRequirement: 0,
      stealthCheck: null,
      baseWeapon: 'Shortsword',
      properties: [],
      attunementDescription: '',
      attunementRequired: false,
      description: ''
    };
    this.extra = {
      hasCharges: false,
      chargeCapacity: null,
      chargeReset: null,
      chargeResetDescription: null,
      chargeWeight: null,
      weight: 0,
      avatar_path: null,
      large_avatar_path: null,
      magic_item_tags: []
    };
    this.actions = [];
    this.conditions = [];
    this.spells = [];
  }
}

export default Item;
export { Item };

declare type ItemRarity =
  | 'Common'
  | 'Uncommon'
  | 'Rare'
  | 'Very Rare'
  | 'Artifact'
  | 'Legendary'
  | 'Unknown';

declare type ItemTypes = 'Armour' | 'Item' | 'Weapon';

declare type BaseMagicItem =
  | null
  | 'Potion'
  | 'Ring'
  | 'Rod'
  | 'Scroll'
  | 'Staff'
  | 'Wand'
  | 'Wonderous Item';

declare type BaseArmour =
  | null
  | 'Breastplate'
  | 'Chainmail'
  | 'Chain Shirt'
  | 'Hide'
  | 'Leather'
  | 'Padded'
  | 'Plated'
  | 'Scalemail'
  | 'Shield'
  | 'Splinted'
  | 'Studded Leather';

declare type DexBonus = null | 'Full Modifier' | 'Max 2' | 'None';
declare type StealthCheck = null | 'None' | 'Disadvantage';

declare type BaseWeapon =
  | null
  // MELEE
  | 'Battle Axe'
  | 'Club'
  | 'Dagger'
  | 'Double-Bladed Scimitar'
  | 'Flail'
  | 'Glaive'
  | 'Greataxe'
  | 'Greatclub'
  | 'Greatsword'
  | 'Halberd'
  | 'Hand Mortar'
  | 'Hand Axe'
  | 'Javelin'
  | 'Lance'
  | 'Light Hammer'
  | 'Longsword'
  | 'Mace'
  | 'Hand Axe'
  | 'Hand Axe'
  | 'Pike'
  | 'Quarterstaff'
  | 'Rapier'
  | 'Scimitar'
  | 'Shortsword'
  | 'Sickle'
  | 'Spear'
  | 'Trident'
  | 'Warhammer'
  | 'Whip'

  // RANGED
  | 'Blow Gun'
  | 'Blunderbuss'
  | 'Boomerang'
  | 'Crossbow Hand'
  | 'Crossbow Light'
  | 'Crossbow Heavy'
  | 'Dart'
  | 'Longbow'
  | 'Musket'
  | 'Revolver'
  | 'Rifle'
  | 'Short Bow'
  | 'Shotgun'
  | 'Sling';

declare type WeaponProperties =
  | 'Finesse'
  | 'Light'
  | 'Ammunition'
  | 'Loading'
  | 'Ranged'
  | 'Reach'
  | 'Special'
  | 'Thrown'
  | 'Two-Handed'
  | 'Versatile'
  | 'Improvised Weapon'
  | 'Silvered Weapon';

export {
  ItemRarity,
  ItemTypes,
  BaseMagicItem,
  BaseArmour,
  DexBonus,
  StealthCheck,
  BaseWeapon,
  WeaponProperties
};
