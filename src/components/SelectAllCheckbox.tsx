import { Checkbox } from '@chakra-ui/react';

interface SelectAllCheckboxProps {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const SelectAllCheckbox = ({ isChecked, onChange }: SelectAllCheckboxProps) => {
  return (
    <Checkbox isChecked={isChecked} onChange={(e) => onChange(e.target.checked)} size="lg" colorScheme="teal">
      모두선택
    </Checkbox>
  );
};

export default SelectAllCheckbox;
