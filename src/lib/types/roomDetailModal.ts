import { ImageInfo } from './imageInfo';

export type RoomDetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedRooms: {
    id: number;
    imageList: ImageInfo[];
    roomType: string;
    roomTypeName: string;
    roomPrice: number;
    roomExtraPrice: number;
    roomStock: number;
    roomDefaultGuest: number;
    roomMaxGuest: number;
    comment: string;
  };
};
