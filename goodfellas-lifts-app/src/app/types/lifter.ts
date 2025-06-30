import { PersonalRecordGym } from './personal-record-gym';
import { PersonalRecordComp } from './personal-record-comp';

export interface Lifter {
  id: string;
  name: string;
  avatar: string;
  bornYear: number;
  personalRecordGym: PersonalRecordGym;
  personalRecordComp: PersonalRecordComp;
}
