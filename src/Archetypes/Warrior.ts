import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _archeTypeInstance = 0;

  public static createdArchetypeInstances(): number {
    this._archeTypeInstance += 1;
    return Warrior._archeTypeInstance;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}