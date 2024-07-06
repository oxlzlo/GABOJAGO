import { Rooms } from './accommodation';

export type CartItemProps = {
  onHandleSelectRooms: (roomItem: CartItems, isSelected: boolean) => void;
  onDeleteSelectedRoom: (cartItemId: number) => void;
  checkSelectedRooms: CartItems[];
  setCartRooms: React.Dispatch<React.SetStateAction<CartItems[]>>;
  cartRooms: CartItems[];
};

export type CartItems = {
  cart_item_id: number;
  start_date: string;
  end_date: string;
  room: Rooms;
};

export type SelectedRoomsProps = {
  checkSelectedRooms: CartItems[];
};
