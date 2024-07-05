import { Rooms } from './accommodation';

export type CartItemProps = {
  onSelectRooms: (roomItem: CartItems, isSelected: boolean) => void;
  onDeleteSelectedRoom: (cartItemId: number) => void;
};

export type CartItems = {
  cart_item_id: number;
  start_date: string;
  end_date: string;
  room: Rooms;
};

export type SelectedRoomsProps = {
  selectedRooms: CartItems[];
};
