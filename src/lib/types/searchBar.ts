import { Accommodation } from './accommodation';

export type DropdownRef = React.RefObject<HTMLDivElement>;
export type DateState = Date | null;
export interface SearchBarProps {
  onSearch: (data: Accommodation[]) => void;
}
