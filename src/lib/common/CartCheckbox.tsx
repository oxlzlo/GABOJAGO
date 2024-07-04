import { Checkbox } from '@chakra-ui/react';

export const CartCheckbox = ({ cartRoom, onSelecRooms, ...props }: any) => {
  /**
   *  체크박스 선택 시 해당 상품을 선택하거나 해제함
   * @param event
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelecRooms(cartRoom, event.target.checked);
  };

  return (
    <Checkbox
      {...props}
      onChange={handleChange}
      sx={{
        '& .chakra-checkbox__control': {
          width: '2rem',
          height: '2rem',
        },
        '& .chakra-checkbox__icon': {
          fontSize: '2.5rem',
        },
      }}
    />
  );
};
