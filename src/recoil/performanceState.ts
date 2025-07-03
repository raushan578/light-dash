import { atom } from 'recoil';

export interface PerfData {
  route: string;
  time: number;
}

export const performanceState = atom<PerfData[]>({
  key: 'performanceState',
  default: [],
});

