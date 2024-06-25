export type Room = {
  id: number;
  roomType: string;
  roomTypeName: string;
  roomPrice: number;
  roomExtraPrice: number;
  roomStock: number;
  roomDefaultGuest: number;
  roomMaxGuest: number;
  comment: string;
};

export type Accommodation = {
  name: string;
  address: string;
  numbers: number;
  comment: string;
  roomList: Room[];
  image?: string;
};
