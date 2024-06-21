import { InputProps } from '@chakra-ui/react';

export type DatepickerStyleProps = {
  style?: React.CSSProperties;
};

export interface CustomInputProps extends InputProps {
  value: string;
  onClick: () => void;
  style?: React.CSSProperties;
}
