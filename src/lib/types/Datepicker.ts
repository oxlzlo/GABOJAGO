import { InputProps } from '@chakra-ui/react';

export type DatepickerStyleProps = {
  value: string;
  onChange: (date: Date | null) => void;
  style?: React.CSSProperties;
};

export interface CustomInputProps extends InputProps {
  value: string;
  onClick: () => void;
  style?: React.CSSProperties;
}
