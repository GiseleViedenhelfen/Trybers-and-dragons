import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _archeTypeInstance = 0;

  public static createdArchetypeInstances(): number {
    this._archeTypeInstance += 1;
    return Mage._archeTypeInstance;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}