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

export type selectedItems = {
  room: Rooms;
  id: number;
  start_date: string;
  end_date: string;
  cart_item_id: number;
};

export type OrderDetailsProps = {
  selectedItems: selectedItems[];
  selectedRoom: Rooms;
};
