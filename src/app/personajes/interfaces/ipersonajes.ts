import { IFrutas } from '../../frutas/interfaces/ifrutas';
import { ICrew } from './icrew';

export interface IPersonajes {
  id: number;
  name: string;
  size?: string;
  age?: string;
  bounty?: string;
  crew?: ICrew;
  fruit?: IFrutas;
  job?: string;
  status?: string;
}
