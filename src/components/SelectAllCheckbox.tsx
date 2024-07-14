import { SelectAllCheckboxProps } from '@/lib/types/checkbox';
import { Checkbox } from '@chakra-ui/react';

const SelectAllCheckbox = ({ isChecked, onChange, ...props }: SelectAllCheckboxProps) => {
  return (
    <Checkbox
      {...props}
      isChecked={isChecked}
      onChange={(event) => onChange(event.target.checked)}
      size="lg"
      colorScheme="teal"
    />
  );
};

export default SelectAllCheckbox;
