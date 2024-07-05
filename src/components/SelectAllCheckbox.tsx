import { Checkbox } from '@chakra-ui/react';

type SelectAllCheckboxProps = {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  borderColor: string;
};

const SelectAllCheckbox = ({ isChecked, onChange, ...props }: SelectAllCheckboxProps) => {
  return (
    <Checkbox
      {...props}
      isChecked={isChecked}
      onChange={(e) => onChange(e.target.checked)}
      size="lg"
      colorScheme="teal"
    />
  );
};

export default SelectAllCheckbox;
