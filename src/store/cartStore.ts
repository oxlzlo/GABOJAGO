import { CartStore } from '@/lib/types/cartStore';
import { create } from 'zustand';

export const useCartStore = create<CartStore>((set) => ({
  cartRooms: [],
  addToCart: (room) => set((state) => ({ cartRooms: [...state.cartRooms, room] })),
  removeCart: (cartItemId) =>
    set((state) => ({ cartRooms: state.cartRooms.filter((cartRoom) => cartRoom.cart_item_id !== cartItemId) })),
  //   clearCart: () => set({ cartRooms: [] }),
}));
