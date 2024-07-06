import { CartItems } from './cart';

export type CartCheckboxProps = {
  cartRoom: CartItems;
  isChecked: boolean;
  onHandleSelectRooms: (roomItem: CartItems, isSelected: boolean) => void;
  borderColor: string;
};

export type SelectAllCheckboxProps = {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  borderColor: string;
};
