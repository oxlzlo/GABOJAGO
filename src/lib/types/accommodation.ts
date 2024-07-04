import { ImageInfo } from './imageInfo';

export type CombinedAccommodationRooms = Accommodation & Rooms;

export type Accommodation = {
  imageList: ImageInfo[];
  id: number;
  name: string;
  address: string;
  numbers: number;
  comment: string;
  thumbnail: string;
  price: number;
  roomList: Rooms[];
  length?: number;
};

export type Rooms = {
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
  cart_item_id?: number;
  end_date?: string;
  start_date?: string;
};

export interface AccommodationListProps {
  accommodation: Accommodation[];
}

export type RoomListType = {
  roomList: Rooms[];
};
