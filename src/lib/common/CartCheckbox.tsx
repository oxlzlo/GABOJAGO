import { Checkbox } from '@chakra-ui/react';

export const CartCheckbox = ({ cartRoom, onSelectRooms, ...props }: any) => {
  /**
   *  체크박스 선택 시 해당 상품을 선택하거나 해제함
   * @param event
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectRooms(cartRoom, event.target.checked);
  };

  return (
    <Checkbox
      {...props}
      onChange={handleChange}
      size="lg" // 체크박스 크기를 크게 설정
      colorScheme="teal"
    />
  );
};
