import { Ipost } from './ipost';

export interface Root {
  posts: Ipost[];
  total: number;
  skip: number;
  limit: number;
}
