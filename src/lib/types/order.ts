import { Rooms } from './accommodation';

export type OrderData = {
  id: number;
  isActive: boolean;
  createdAt: string;
  doneRoomList: Rooms[];
  totalPrice: number;
  status: string;
  updatedAt: string;
};
