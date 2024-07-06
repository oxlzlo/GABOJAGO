import { CartItems } from './cart';

export type CartStore = {
  cartRooms: CartItems[];
  addToCart: (room: CartItems) => void;
  removeCart: (cartItemId: number) => void;
};
