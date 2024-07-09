import { CartCheckboxProps } from '@/lib/types/checkbox';
import { Checkbox } from '@chakra-ui/react';

export const CartCheckbox = ({ cartRoom, isChecked, onHandleSelectRooms, ...props }: CartCheckboxProps) => {
  /**
   *  체크박스 선택 시 해당 상품을 선택하거나 해제함
   * @param event
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onHandleSelectRooms(cartRoom, event.target.checked);
  };

  return <Checkbox {...props} isChecked={isChecked} onChange={handleChange} size="lg" colorScheme="teal" />;
};
